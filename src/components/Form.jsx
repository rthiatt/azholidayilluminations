import React, {useState, useRef, useEffect} from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import MoonLoader from "react-spinners/ClipLoader";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function FormItems(props, setProblemLocation, problemLocation, setServiceType, serviceType, setStartDate, startDate, setEndDate, endDate, handleCheckboxChange) {
    if (props.formType === "repair") { 
        return (
            <div className="input-style">
                <label>Location of the problem</label>                    
                <StyledTextarea onChange={e => props.setProblemLocation(e.target.value)} value={problemLocation} name="problemLocation" id="problemLocation" rows="5"></StyledTextarea>
            </div>
        )
    } else {
        return (
            <>

            {props.formType === "quote" ? 
            <div className="input-style" style={{'alignItems' : "flex-start", marginRight: "2vw", marginBottom: "3vw"}}>
                {/* <label htmlFor='name'>Service Type</label> */}
                
                {/* <StyledSelect defaultValue={"Select..."} onChange={e => props.setServiceType(e.target.value)} value={serviceType} type="text" id="serviceType" name="serviceType" >
                    <option disabled>Select...</option>
                    <option>Trim on the front of the house</option>
                    <option>Trim on all sides of the house</option>
                    <option>Tree Wrapping</option>
                    <option>Bush Decoration</option>
                    <option>Tree Delivery</option>
                    <option>Other (Please describe in Notes)</option>
                </StyledSelect> */}
            
                <label><StyledCheckBox onChange={(e) => props.handleCheckboxChange(e)} option={1} type="checkbox" id="option1" name="option1" value={"Trim on the front of the house"}></StyledCheckBox>Trim on the front of the house</label>
                <label><StyledCheckBox onChange={(e) => props.handleCheckboxChange(e)} option={2} type="checkbox" id="option1" name="option1" value={"Trim on all sides of the house"}></StyledCheckBox>Trim on all sides of the house</label>
                <label><StyledCheckBox onChange={(e) => props.handleCheckboxChange(e)} option={3} type="checkbox" id="option1" name="option1" value={"Tree Wrapping"}></StyledCheckBox>Tree Wrapping</label>
                <label><StyledCheckBox onChange={(e) => props.handleCheckboxChange(e)} option={4} type="checkbox" id="option1" name="option1" value={"Bush Decoration"}></StyledCheckBox>Bush Decoration</label>
                <label><StyledCheckBox onChange={(e) => props.handleCheckboxChange(e)} option={5} type="checkbox" id="option1" name="option1" value={"Tree Delivery"}></StyledCheckBox>Tree Delivery</label>
                
            </div> 
            : null}

            <div className="input-style">
                <label htmlFor='name'>Start Date</label>
                <StyledInput onChange={e => props.setStartDate(e.target.value)} value={startDate} type="date" id="startDate" name="startDate" />
            </div>
            <div className="input-style">
                <label htmlFor='name'>Last Date</label>
                <StyledInput onChange={e => props.setEndDate(e.target.value)} value={endDate} type="date" id="lastDate" name="lastDate" />
            </div>
            </>
        )
    }
    
}

const Form = (props) => {

    const formRef = useRef(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    // FORM STATES
    const [requestType, setRequestType] = useState("");
    const [problemLocation, setProblemLocation] = useState("");
    const [serviceType, setServiceType] = useState([]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [bestContact, setBestContact] = useState("Phone");
    const [hoa, setHoa] = useState("No");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [notes, setNotes] = useState("");

    let url = 'https://api.sheety.co/737303563a16427d0b5aaa2b5466b384/quoteRequestQuestionnaire/formResponses1'
    
    function handleCheckboxChange(e) {
        e.target.checked ? serviceType?.push(e.target.value) : serviceType?.splice(serviceType.indexOf(e.target.value), 1) 
    }

    const handleSubmit = (e) =>{

        let result = false
        let formData = new FormData(formRef.current)
        const current = new Date()
        formData.append('timestamp', `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} - ${current.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`)
        formData.append("serviceType", serviceType)
        
        formData = {
            "formResponses1" : Object.fromEntries(formData)
        }
        
        e.preventDefault()
        setLoading(true)

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Basic YXpob2xpZGF5aWxsdW1pbmF0aW9uc0BnbWFpbC5jb206VHJ1c3QzZDEh"
            }
        })
        .then((res) => {
            if(res.status >= 400) {
                
                MySwal.fire({
                    title: <SwalText>We're sorry, there was an error.</SwalText>,
                    html: <SwalText>Please try again later or email us at: <strong>contact@azholidayilluminations.com</strong> to send us a request!</SwalText>,
                    icon: 'error',
                    confirmButtonColor: '#329437',
                    width: ("80%")
                })
                
                setLoading(false)
                
                throw new Error("There was an error posting the data to the server.");
            } else {
                
                setLoading(false)
    
                MySwal.fire({
                    title: <SwalText>Thank you!</SwalText>,
                    html: <SwalText>Someone will be reaching to you soon!</SwalText>,
                    icon: 'success',
                    confirmButtonColor: '#329437',
                    width: ("80%")
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/')
                    }
                })
            
            }

            
        })

    }

    function Header(props) {
        if (props.type === "quote") {
            return (
                <HeaderStyle>Quote Request</HeaderStyle>
            )
        } else if (props.type === "repair") {
            return (
                <HeaderStyle>Repair Request</HeaderStyle>
            )
        } else if (props.type === "takedown") {
            return (
                <HeaderStyle>Take Down Request</HeaderStyle>
            )
        }
    }

    useEffect(() => {
        if (props.formType === "quote") {
            setRequestType('Quote')
        } else if (props.formType === "repair") {
            setRequestType('Repair')
        } else if (props.formType === "takedown") {
            setRequestType('Take Down')
        }
    }, [])

    return (
        <Container>
            <Header type={props.formType}/>

            <StyledForm  ref={formRef} onSubmit={handleSubmit} name="form">
                
                {/* ALL FORMS */}
                <FormGroup>

                    <div className="input-style">
                        <label htmlFor='name'>Name</label>
                        <StyledInput onChange={e => setName(e.target.value)} value={name} type="text" id="name" name="name" />
                    </div>  
                    <div className="input-style">
                        <label htmlFor='name'>Email</label>
                        <StyledInput onChange={e => setEmail(e.target.value)} value={email} type="email" id="email" name="email" />
                    </div>
                    <div className="input-style">
                        <label htmlFor='name'>Phone Number</label>
                        <StyledInput onChange={e => setPhone(e.target.value)} value={phone} type="tel" id="phone" name="phone" />
                    </div>
                    
                    <div className="input-style">
                        <label htmlFor='name'>Best Contact Method</label>
                        <StyledSelect onChange={e => setBestContact(e.target.value)} value={bestContact} name="bestContact" id="bestContact">
                            <option disabled >Select...</option>
                            <option value="Phone">Phone</option>
                            <option value="Email">Email</option>
                        </StyledSelect>
                    </div>

                    <div className="input-style">
                        <label htmlFor='name'>Street</label>
                        <StyledInput onChange={e => setAddress(e.target.value)} value={address} type="text" id="address" name="address" />
                    </div>
                    <div className="input-style">
                        <label htmlFor='name'>City</label>
                        <StyledInput onChange={e => setCity(e.target.value)} value={city} type="text" id="city" name="city" />
                    </div>
                    <div className="input-style">
                        <label htmlFor='name'>Zip Code</label>
                        <StyledInput onChange={e => setZipcode(e.target.value)} value={zipcode} type="number" id="zipcode" name="zipcode" />
                    </div>
                    
                    <div className="input-style">
                        <StyledInput onChange={e => setRequestType(e.target.value)} value={requestType} type="hidden" id="requestType" name="requestType"/>
                    </div>

                    <div className="input-style">
                        <label htmlFor='name'>HOA Community?</label>
                        <StyledSelect onChange={e => setHoa(e.target.value)} value={hoa} name="hoa" id="hoa" required>
                            <option disabled >Select...</option>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </StyledSelect>
                    </div>

                </FormGroup>

                <FormGroup>
                    
                    <div className="input-style">
                        <label htmlFor='name'>{props.formType === "repair" ? "Description of the problem" : "Notes (Gate codes, pet warnings, etc.)"}</label>
                        <StyledTextarea onChange={e => setNotes(e.target.value)} value={notes} name="notes" id="notes" rows="5"></StyledTextarea>
                    </div>

                </FormGroup>
                
                {/* DYNAMIC ITEMS */}
                <FormGroup>
                    <FormItems 
                    formType={props.formType} 
                    setProblemLocation={setProblemLocation} 
                    problemLocation={problemLocation}
                    setServiceType={setServiceType}
                    serviceType={serviceType}
                    setStartDate={setStartDate}
                    startDate={startDate}
                    setEndDate={setEndDate}
                    endDate={endDate}
                    handleCheckboxChange={handleCheckboxChange}
                    />
                </FormGroup>

                <Buttons>
                    <ButtonLink className='buttonStyle' to='/'>Cancel</ButtonLink>
                    <Button className='buttonStyle' style={{"backgroundColor" : "#01d41db1"}} type="submit">{loading ? <Spinner
                    color="#ffffff"
                    size={10}
                    loading={loading}
                    cssOverride={{ margin: 0}}
                    /> : "Submit"}</Button>
                    
                </Buttons> 
                
            </StyledForm>
        </Container> 
    )
}

export default Form

// STYLES
const SwalText = styled.p`
    font-size: 1.45vw;
    text-shadow: none;
    word-break: keep-all;
    

    @media (max-width: 500px) {
        font-size: 5vw;
    }
`

const HeaderStyle = styled.h1`
    font-size: 2.5vw;

    background-color: #ffffff45;
    padding: 2vw;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px #0000009e;

    @media (max-width: 500px) {
        font-size: 8vw;
        padding: 3vw;
    }
`

const FormGroup = styled.div`
    display: flexbox;
    flex-flow: column wrap;
    justify-content: center;

    .input-style {
        display: flex;
        flex-direction: column;
        margin-top: 2vw;

        @media (max-width: 768px) {
            margin-top: 4vw;
        }
    }
`

const Spinner = styled(MoonLoader)`
    margin-top: 1vw;
`

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2vw;
`

const StyledForm = styled.form`
    background-color: #ffffff3d;
    border-radius: 10px;
    padding: 3vw;
    box-shadow: 0px 0px 50px 0px #00000050;
    width: 100%;
    max-width: 1000px;

`

const Button = styled.button`
    margin-left: 1vw;
    /* margin-right: 1vw; */
    padding: 10px;
    align-items: center;
    color: #ffffff;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    /* width: 5vw;
    height: 2.5vw; */
    box-shadow: 0px 0px 10px 0px #00000052;
    text-shadow: #000000c0 0px 0px 10px;
    filter: brightness(80%);
    font-size: 1vw;

    &:hover{
        filter: brightness(100%);
    }

    cursor: pointer;

    @media (max-width: 500px) {
        font-size: large;
    }

`

const ButtonLink = styled(Link)`
    padding: 10px;
    align-items: center;
    color: #ffffff;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    text-decoration: none;
    background-color: #f10000a9;
    
    font-family: 'Hanalei Fill', arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1vw;
    
    /* width: 5vw;
    height: 2.5vw; */
    box-shadow: 0px 0px 10px 0px #00000052;
    text-shadow: #000000c0 0px 0px 10px;
    filter: brightness(80%);

    &:hover{
        filter: brightness(100%);
    }

    cursor: pointer;

    @media (max-width: 768px) {
        font-size: large;
    }

`

const StyledInput = styled.input`

    outline: none;
    border: none;
    padding: 0.5vw;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px #00000052;

    font-family: 'Hanalei Fill', arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000000;
    background-color: #ffffffc3;

    @media (max-width: 500px) {
        padding: 3vw;
    }
`

const StyledCheckBox = styled.input`
    outline: none;
    border: none;
    padding: 0.5vw;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px #00000052;

    font-family: 'Hanalei Fill', arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000000;
    background-color: #ffffffc3;

    height: 25px;
    width: 25px;
    background-color: #eee;

    @media (max-width: 500px) {
        padding: 3vw;
    }
`

const StyledSelect = styled.select`

    outline: none;
    border: none;
    padding: 0.5vw;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px #00000052;

    font-family: 'Hanalei Fill', arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000000;
    background-color: #ffffffc3;

    @media (max-width: 500px) {
        padding: 3vw;
    }
`

const StyledTextarea = styled.textarea`

    outline: none;
    border: none;
    padding: 0.5vw;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px #00000052;

    font-family: 'Hanalei Fill', arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000000;
    background-color: #ffffffc3;

`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10vw;
    margin-right: 10vw;
    margin-bottom: 7vw;
    /* justify-content: center; */
`