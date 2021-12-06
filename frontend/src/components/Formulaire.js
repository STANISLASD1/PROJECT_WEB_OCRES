import * as React from 'react';

export default function Formulaire() {

    return (
        <div className="formulaire container">
            <h2>Selectionner la tâche à effectuer :</h2>
            <div className="button2 justify-content-center">
                <div>
                    <button>Ajouter</button>
                </div>
                <div>
                    <button>Supprimer</button>
                </div>
            </div>
        </div>
    );
}