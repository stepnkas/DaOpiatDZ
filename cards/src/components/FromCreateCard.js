import React from "react";
import {useInput} from "./UseInput";
import {useForm } from "react-hook-form"; 
import "./error.css";

export function FromCreateCard() {

    const [count, setCount] = React.useState(0);
    const {register, handleSubmit, formState: {errors}} = useForm({defaultValues: {
            fronttext: "",
            backtext: ""
        }
    });
    console.log(errors);

    React.useEffect(() => {
        if (count !== 0){
            console.log(`Отправка формы : ${count}`);
            alert(`Отправка формы : ${count}`);
        }
        
        
    }, [count]);

    return (
        <form onSubmit ={handleSubmit((data)=> {
            setCount(count + 1);
            console.log(data);
        })}>
            <label>
                Передняя сторона карточки:
                <input type="text" name="fronttext" id='fronttext' {...register("fronttext", {
                    required:"заполните пж",
                    minLength:{
                        value: 2,
                        message:"название должно 2 символа"
                    }
                })}/>
                <p className="error-msg">{errors.fronttext?.message}</p>
            </label>
            <label>
                Задняя сторона карточки:
                <input type="text" name="backtext" id="backtext" {...register("dbacktext", {required:"это тоже заполнить"})}/>
            </label>
            <input type="submit" value="Создать картачку" />
            <p className="error-msg">{errors.backtext?.message}</p>
        </form>
    );
}