import React from 'react';
import '../../css/datadevelopment.css';

const DataDevelopment = () => {

    return (
        <div className="data-development-section padding-box">
            <h1 className="skill-heading data-development">Languages & IDEs</h1>
            <h5 className="programming-languages-heading">Additional Programming Languages</h5>
            <p className="programming-paragraph">Other than web development, which is a big part of my skillset, I am competant in other types of programming languages as well: <ul class="programming-list"><li>Java</li><li>Script Programming with Typescript/Javascript</li><li>Linux Shell Scripting/Command Line</li></ul></p>
            <p className="programming-paragraph">Java was the first language I learned in high school. Intrigued by the idea of programming, I decided to pursue my studies in Software Engineering. I closely followed Java with Python which I believe to be an excellent language to learn, especially for beginners.</p>
            <h5 className="programming-languages-heading">IDEs - Integrated Development Environment</h5>
            <p className="programming-paragraph">IDEs allow developers to make use of an application which is specifically tailored to design applications of particular language(s). There are several out there and really depends on you, the developer. Below is a list of all the IDE's I am familiar with: </p>
                <ul className="programming-list">
                    <li>Atom.io - Generic editor. Covers any language</li>
                    <li>Eclipse - Java </li>
                    <li>Notepad</li>
                    <li>Terminal/Bash Shell - Linux Command Line</li>
                    <li>Visual Studio Code - Perhaps the best editor ever. I make use of this editor for web development.</li>
                </ul>      
        </div>
    )
}

export default DataDevelopment;