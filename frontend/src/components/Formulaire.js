import * as React from 'react';

export default function Formulaire() {

    return (
        <div className="formulaire container">
            <h2>Selectionner la tâche à effectuer :</h2>
            
            <br/>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 carte">
                        <h3>Ajouter des photos</h3>
                        <br/>
                        <form action="http://localhost:3001/users/" method="POST" enctype="multipart/form-data">
                            <input type="text" placeholder="Nom de la photo" name="name" required />
                            <input type="file" name="fichierPhoto" />
                            <br/><br/>
                            <input type="submit" value="Enregistrer" className="buttonForm" />
                        </form>
                    </div>
                    <div className="col-md-6 carte">
                        <h3>Supprimer des photos</h3>
                        <br/>
                        <form action="http://localhost:3001/users" method="DEL">
                            <input type="text" placeholder="Id photo" name="idSupp" required />
                            <label>selectionner un fichier</label>
                            <br/><br/>
                            <input type="submit" value="Supprimer" className="buttonForm"/>
                        </form>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 carte">
                        <h3>Affihcer les photos</h3>
                        <br/>
                        <form action="http://localhost:3001/users/" method="GET">
                            <input type="submit" value="Afficher" className="buttonForm"/>
                        </form>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    );
}