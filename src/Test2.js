import React, {useState} from 'react';

const Test2 = () => {

    const [students, setStudents] = useState([
        {id: 1, name: 'Toto', html: 0, css: 0, js:0},
        {id: 2, name: 'Mathieu', html: 20, css: 20, js: 20},
        {id: 3, name: 'Victoire', html: 15, css: 17, js:13},
        {id: 4, name: 'Mohamed', html: 16, css: 8, js:14},
        {id: 5, name: 'Andrew', html: 16, css: 18, js:18}
    ]);

    const [studentId, setStudentId] = useState('')
    const [studentName, setStudentName] = useState('')
    const [studentHtml, setStudentHtml] = useState('')
    const [studentCss, setStudentCss] = useState('')
    const [studentJs, setStudentJs] = useState('')

    const getStudentId = (e)=>{
        setStudentId(e.target.value)
    }
    const getStudentName = (e)=>{
        setStudentName(e.target.value)
    }
    const getStudentHtml = (e) => {
        setStudentHtml(parseFloat(e.target.value))
    }

    const getStudentCss = (e) => {
        setStudentCss(parseFloat(e.target.value))
    }

    const getStudentJs = (e) => {
        setStudentJs(parseFloat(e.target.value))
    }

    const removeStudent = (e) =>{
        // const newTableStudents = [...students]
        const newStudents = students.filter((student)=> student.id != e);
        setStudents(newStudents);
    }

    const addNewStudent = () =>{
        const studentID = students[students.length - 1].id +1;
        const newStudents = [...students];
        newStudents.push({id: studentID, name: studentName, html: studentHtml, css: studentCss, js: studentJs});
        setStudents(newStudents);
    }

    const modifyStudent = (e) =>{
        const newStudents = [...students];
        const modifiedStudent = newStudents.filter((student)=> student.id == e);
        setStudentId(parseInt(modifiedStudent[0].id));
        setStudentName(modifiedStudent[0].name);
        setStudentHtml(parseInt(modifiedStudent[0].html));
        setStudentCss(parseInt(modifiedStudent[0].css));
        setStudentJs(parseInt(modifiedStudent[0].js));
    }

    const getIdInput = (e) => {
        setStudentId(e.target.value);
    }
    const modifyStudentInput = (e) => {
        setStudentName(e.target.value);
    }
    const modifyHtmlInput = (e) => {
        setStudentHtml(e.target.value);
    }
    const modifyCssInput = (e) => {
        setStudentCss(e.target.value);
    }
    const modifyJsInput = (e) => {
        setStudentJs(e.target.value);
    }
    const updateStudent = (e) => {
        const newStudents = [...students];
        const modifiedStudent = newStudents.filter((student) => student.id == e);

        // modifiedStudent.slice(0,5)
        setStudentId(parseFloat(modifiedStudent[0].id));
        setStudentName(modifiedStudent[0].name);
        setStudentHtml(parseFloat(modifiedStudent[0].html));
        setStudentCss(parseFloat(modifiedStudent[0].css));
        setStudentJs(parseFloat(modifiedStudent[0].js));

        modifiedStudent.id = studentId
        modifiedStudent.name = studentName
        modifiedStudent.html = studentHtml
        modifiedStudent.css = studentCss
        modifiedStudent.js = students
        // newStudents.push(modifiedStudent)
        // setStudents(newStudents)
        console.log(modifiedStudent);
    }
    return (
        <div>s
            <section>
                <h1>Test 2</h1>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
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
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.html}</td>
                            <td>{student.css}</td>
                            <td>{student.js}</td>
                            <td>{Math.round((student.html+student.css+student.js)/3)}</td>
                            <td><button onClick={()=>removeStudent(student.id)}>X</button></td>
                            <td><button onClick={()=>modifyStudent(student.id)}>O</button></td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </section>
            <section>
                    {/*<form action="" onSubmit={(e)=>{ e.preventDefault(); addNewStudent()}}>*/}
                    {/*    <label htmlFor="">Name</label>*/}
                    {/*    <input type="text" onChange={getStudentName}/>*/}
                    {/*    <label htmlFor="">note HTML</label>*/}
                    {/*    <input type="number" onChange={getStudentHtml}/>*/}
                    {/*    <label htmlFor="">note CSS</label>*/}
                    {/*    <input type="number" onChange={getStudentCss}/>*/}
                    {/*    <label htmlFor="">note JS</label>*/}
                    {/*    <input type="number" onChange={getStudentJs}/>*/}
                    {/*    <input type='submit'/>*/}
                    {/*</form>*/}
            </section>
            <section>
                <form action="" onSubmit={(e)=>{ e.preventDefault(); updateStudent(studentId)}}>
                    <label htmlFor="">ID</label>
                    <input type="number" required value={studentId}/>
                    <label htmlFor="">Name</label>
                    <input type="text" required value={studentName} onChange={(e)=>{modifyStudentInput(e)}}/>
                    <label htmlFor="">note HTML</label>
                    <input type="number" required value={studentHtml} onChange={(e)=>{modifyHtmlInput(e)}}/>
                    <label htmlFor="">note CSS</label>
                    <input type="number" required value={studentCss} onChange={(e)=>{modifyCssInput(e)}}/>
                    <label htmlFor="">note JS</label>
                    <input type="number" required value={studentJs} onChange={(e)=>{modifyJsInput(e)}}/>
                    <input type='submit'/>
                </form>
            </section>
        </div>
    );
};

export default Test2;