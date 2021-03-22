import '../../css/datadevelopment.css';

const DataDevelopment = () => {

    return (
        <div className="data-development-section padding-box">
            <h1 className="skill-heading data-development">Languages/Data Formats/IDEs</h1>
            <h5 className="programming-languages-heading">Additional Programming Languages</h5>
            <p className="programming-paragraph">Other than web development, which is a big part of my skillset, I am competant in other types of programming languages as well: <ul class="programming-list"><li>Python</li><li>Java</li><li>Linux Shell Scripting/Command Line & GIT</li><li>C# (Not an expert)</li></ul></p>
            <p className="programming-paragraph">Java was the first language I learned in high school. Intrigued by the idea of programming, I decided to pursue my studies in Software Engineering. I closely followed Java up with Python which I believe to be an excellent language to learn, especially for beginners.</p>
            <p className="programming-paragraph">Over the last year, I learned valuable knowledge related to Data Science and how Python can be a useful tool to use for Data Visualization and Analysis. I have exposure to C#, Visual Studio, and the .Net Framework but I am not as well versed in it as I am with Python and Java.</p>
            <p className="programming-paragraph">Owner of a Linux operating system, I use the command line most often. It is an important tool to use and comes handy when working with directories and files. Version control, Git makes use of the command line and working with the MONGODB instance does as well so learning how to use the shell is critical.</p>
            <h5 className="programming-languages-heading">Data Interchange Formats</h5>
            <p className="programming-paragraph">Data Interchange Formats allow developers and users alike to pick a model or style in which they store/transfer/manipulate data. Data storages I am familiar are the following: <ul class="programming-list"><li>JSON</li><li>CSV</li></ul></p>
            <p className="programming-paragraph">I have used JSON to store data in a MONGODB instance and used CSV files to populate tables in a database. Both are effective styles of data storage.</p>
            <h5 className="programming-languages-heading">IDEs - Integrated Development Environment</h5>
            <p className="programming-paragraph">IDEs allow developers to make use of an application which is specifically tailored to design applications of particular language(s). There are several out there and really depends on you, the developer. Below is a list of all the IDE's I am familiar with: </p>
                <ul className="programming-list">
                    <li>Atom.io - Generic editor. Covers any language</li>
                    <li>Eclipse - Java </li>
                    <li>Jupyter Notebook - Python</li>
                    <li>Notepad</li>
                    <li>Terminal/Bash Shell - Linux Command Line</li>
                    <li>Visual Studio Code - Perhaps the best editor ever. I make use of this editor for web development.</li>
                </ul>      
        </div>
    )
}

export default DataDevelopment;