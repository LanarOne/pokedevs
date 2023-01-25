import React, {useState} from 'react';

const Test2 = () => {

    const [students, setStudents] = useState([
        {id: 1, name: 'Toto', html: 0, css: 0, js:0},
        {id: 2, name: 'Mathieu', html: 20, css: 20, js: 20},
        {id: 3, name: 'Victoire', html: 15, css: 17, js:13},
        {id: 4, name: 'Mohamed', html: 16, css: 8, js:14},
        {id: 5, name: 'Andrew', html: 16, css: 18, js:18}
    ]);

    const removeStudent = (e) =>{
        const newStudents = students.filter((student)=> student.id != e);
        setStudents(newStudents);
    }

    return (
        <div>
            <h1>Test 2</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>html</th>
                        <th>css</th>
                        <th>js</th>
                        <th>moyenne</th>
                        <th>delete</th>
                        <th>update</th>
                    </tr>
                    </thead>
                    <tbody>
                    {students.map((student)=>{
                        return <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.html}</td>
                            <td>{student.css}</td>
                            <td>{student.js}</td>
                            <td>{Math.round((student.html+student.css+student.js)/3)}</td>
                            <td><button onClick={()=>removeStudent(student.id)}>X</button></td>
                            <td><button>O</button></td>
                        </tr>
                    })}
                    </tbody>
                </table>
        </div>
    );
};

export default Test2;