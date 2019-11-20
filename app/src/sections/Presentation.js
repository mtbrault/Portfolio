import React, { Component } from 'react';
import '../assets/css/presentation.css';

const pp = require('../assets/img/pp.jpg');

class Presentation extends Component {
    render() {
        return (
            <div id="presentation">
                <h2 className="subtitle">À propos de moi</h2>
                <div className="inline-container">
                    <img alt="Ma photo" src={pp} id="pp" />
                    <p id="myself">
                        Coucou<br />re coucou
                    </p>
                    <ul>
                        <li><strong>Date de naissance :</strong> 30 Décembre 1999 (19 ans)</li>
                        <li><strong>Ville :</strong> Paris 12, France</li>
                        <li><strong>Email :</strong> matthieu.brault@epitech.eu</li>
                        <li><strong>Téléphone :</strong> 06 34 31 92 96</li>
                        <li><strong>Anglais :</strong> Niveau opérationnel (840 au TOEIC)</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Presentation;
