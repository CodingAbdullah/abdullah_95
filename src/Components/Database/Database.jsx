import '../../css/database.css';

const Database = () => {

    return (
        <div className="database-section padding-box">
                <h1 className="skill-heading database">Relational/Non-Relational Databases</h1>
                <p className="sql-paragraph">In the world of databases, there are two man families: Relational and Non-Relational. I am comfortable in working with both.</p>
                <h5 className="sql-heading">SQL - Structured Query Language</h5> 
                <p className="sql-paragraph sql-first">SQL allows users to create, insert, read, update, and delete data and/or objects from the database. SQL works with Relational databases only.</p>
                <p className="sql-paragraph">I am familiar with SQL subsets such as DDL (Data Definition Language), DML (Data Manipulation Language), and TCL (Transaction Control Language). I know different types of objects such as Constraints, Sequences, Indexes, etc.</p>
                <h5 className="sql-heading">MONGODB</h5> 
                <p className="sql-paragraph sql-first">MONGODB is the Non-Relational Database equivalent of SQL. Making use of collections which store multiple documents constructed in JSON. Essentially, key-value pairs specifying a record. It does not enforce a schema like SQL does.</p>
                <p className="sql-paragraph">I LOVE working with JSON. It is simple to understand and makes MONGODB the popular choice when JavaScript is the only language for the stack.</p>
        </div>
    )
}

export default Database;