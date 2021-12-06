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
            <br/>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 carte">
                        <h3>Ajouter des photos</h3>
                        <br/>
                        <form>
                            <input type="file" />
                            <input type="submit" value="Enregistrer" />
                        </form>
                    </div>
                    <div className="col-md-6 carte">
                        <h3>Supprimer des photos</h3>
                        <br/>
                        <form>
                            <p>[Tableau photos]</p>
                            <label>selectionner un fichier</label>
                            <input type="submit" value="Supprimer" />
                        </form>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    );
}