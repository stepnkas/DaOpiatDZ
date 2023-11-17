import React from "react";
import {useInput} from "./UseInput";
import {useForm } from "react-hook-form"; 
import "./error.css";

export function FromCreateSet() {
    const [count, setCount] = React.useState(0);
    const {register, handleSubmit, formState: {errors}} = useForm({defaultValues: {
            name: "",
            discription: ""
        }
    });
    console.log(errors);

    const onSubmit = async (data) => {
        console.log(data);
        fetch("http://localhost:5000/api/set/create",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(function (res) {console.log(res) })
        .catch(function (res) {console.log(res)});
    };

    React.useEffect(() => {
        if (count !== 0){
            console.log(`Отправка формы : ${count}`);
            alert(`Отправка формы : ${count}`);
        }
        
        
    }, [count]);

    // const [name, setName] = useInput('');
    // const [discription, setDiscription] = useInput('');

    // function handleNameChange(e) {
    //     setName(e.target.value);
    // }
    // function handleNameChange1(e) {
    //     setDiscription(e.target.value);
    // }
    // function handleSubmit(e){
    //     e.preventDefault();
    //     console.log(name,  discription);
    // }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form__item">
            <label>
                Название набора:
                <input type="text" name="name" id='name' {...register("name", {
                    required:"заполните пж",
                    minLength:{
                        value: 4,
                        message:"название должно 4 символа"
                    }
                })}/> 
                <p className="error-msg">{errors.name?.message}</p>
            </label>
            </div>
            <div className="form__item">
            <label>
                Описание:
                <textarea name="discription" id='discription' {...register("discription", {required:"это тоже заполнить"})}/>
            </label>
            <input type="submit" value="Создать сет" />
            <p className="error-msg">{errors.discription?.message}</p>
            </div>
        </form>
    );
}