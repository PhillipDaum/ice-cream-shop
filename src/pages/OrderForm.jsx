import Form from "../components/Form"
import './OrderForm.css'

// import the stack of orders
function OrderForm({handleChange, handleSubmit, formData}) {

    return (
        <>
            <div className="form-container">
                <h2>Place your ice cream order!</h2>
                <Form handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} />
            </div>
        </>
    )
}

export default OrderForm
