

function calculate(num1,num2, operation) {
    let result;
    switch (operation) {
        case"add":
        result=num1 +num2;
        break;
        case "subtract":
            result =num1 -num2;
            break;
            case "multiply":
                result = num1 + num2;
                break;
                case"divide":
                if (num2 === 0) {
                    return 'Error: division by zero is not allowed';
                }
                result - num1 / num2;
                break;
            default:
                return"Error: Invalid operator";
    }
    return result;
}
console.log(calculate(10, 5, "add"));      
console.log(calculate(10, 5, "subtract"));      
console.log(calculate(10, 5, "multiply"));      
console.log(calculate(10, 5, "divide"));      


