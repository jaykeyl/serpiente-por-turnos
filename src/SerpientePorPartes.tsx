import { useState } from 'react';
import type { KeyboardEvent } from 'react';

import './SerpientePorPartes.css';

type Posicion = {
    fila: number;
    columna: number;
};

type Serpiente = Posicion[];

export default function SerpientePorPartes() {

    const [serpiente, setSerpiente] = useState<Serpiente>([
        { fila: 3, columna: 4 },
        { fila: 3, columna: 3 },
        { fila: 3, columna: 2 }
    ]);

    const [comida, setComida] = useState<Posicion>({
        fila: 5,
        columna: 5
    });

    const [resultado, setResultado] = useState<string>('Jugando...');

    const nuevaComida = (): Posicion => {

        let posicion: Posicion;
        let ocupada: boolean;

        do {
            posicion = {
                fila: Math.floor(Math.random() * 8),
                columna: Math.floor(Math.random() * 8)
            };

            ocupada = false;

            for (let i = 0; i < serpiente.length; i++) {
                if (
                    serpiente[i].fila === posicion.fila &&
                    serpiente[i].columna === posicion.columna
                ) {
                    ocupada = true;
                }
            }

        } while (ocupada);

        return posicion;
    };

    const moverSerpiente = (evento: KeyboardEvent<HTMLDivElement>): void => {

        const cabeza = serpiente[0];

        let nuevaCabeza: Posicion;

        if (evento.key === 'ArrowUp') {
            nuevaCabeza = {
                fila: cabeza.fila - 1,
                columna: cabeza.columna
            };
        }

        else if (evento.key === 'ArrowDown') {
            nuevaCabeza = {
                fila: cabeza.fila + 1,
                columna: cabeza.columna
            };
        }

        else if (evento.key === 'ArrowLeft') {
            nuevaCabeza = {
                fila: cabeza.fila,
                columna: cabeza.columna - 1
            };
        }

        else if (evento.key === 'ArrowRight') {
            nuevaCabeza = {
                fila: cabeza.fila,
                columna: cabeza.columna + 1
            };
        }

        else return;

        if (
            nuevaCabeza.fila < 0 ||
            nuevaCabeza.fila > 7 ||
            nuevaCabeza.columna < 0 ||
            nuevaCabeza.columna > 7
        ) {
            setResultado('Perdiste: chocaste con el borde');
            return;
        }


        let choco = false;

        for (let i = 0; i < serpiente.length; i++) {

            if (
                serpiente[i].fila === nuevaCabeza.fila &&
                serpiente[i].columna === nuevaCabeza.columna
            ) {
                choco = true;
            }

        }

        if (choco) {
            setResultado('Perdiste: chocaste con tu cuerpo');
            return;
        }

        const comio = nuevaCabeza.fila === comida.fila && nuevaCabeza.columna === comida.columna;

        //si comio alguna comida, entonces anadir una nueva parte y que la siguiente comida sea aleatoria
        if (comio) {
            const nuevaSerpiente: Serpiente = [];
            nuevaSerpiente.push(nuevaCabeza);
            for (let i = 0; i < serpiente.length; i++) {
                nuevaSerpiente.push(serpiente[i]);
            }
            setSerpiente(nuevaSerpiente);
            setComida(nuevaComida());
        } else {
            const nuevaSerpiente: Serpiente = [];
            nuevaSerpiente.push(nuevaCabeza);
            for (let i = 0; i < serpiente.length - 1; i++) {
                nuevaSerpiente.push(serpiente[i]);
            }
            setSerpiente(nuevaSerpiente);
        }

    };


    return (
        <div tabIndex={0} onKeyDown={moverSerpiente}>
            <p>{resultado}</p>
            <table>
                <tbody>
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((fila) => {

                        return (
                            <tr key={fila}>

                                {[0, 1, 2, 3, 4, 5, 6, 7].map((columna) => {

                                    const esCabeza =
                                        serpiente[0].fila === fila &&
                                        serpiente[0].columna === columna;

                                    let esCuerpo = false;
                                    for (let i = 1; i < serpiente.length; i++) {
                                        if (
                                            serpiente[i].fila === fila &&
                                            serpiente[i].columna === columna
                                        ) {
                                            esCuerpo = true;
                                        }
                                    }

                                    const esComida =
                                        comida.fila === fila &&
                                        comida.columna === columna;

                                    return (
                                        <td key={columna}>
                                            <div className={ esCabeza ? 'cabeza' : esCuerpo ? 'cuerpo' : esComida ? 'comida' : 'celda'}/>
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}