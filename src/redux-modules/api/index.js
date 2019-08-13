// import axios from "axios";
const member =[
    {
        "mmbr_ssn" : "565008035",
        "mmbr_cms_unique_nbr" : "565008035-A1",
        "mmbr_first_name" : "John",
		"mmbr_middle_name" : "Kevin",
        "mmbr_last_name" : "Smith",
        "mmbr_gender" : "M",
        "mmbr_physical_city" : "Jacksonville",
		"mmbr_physical_state" : "Florida",
		"mmbr_physical_zip_code" : "32207",
        "mmbr_physical_county" : "US",
        "mmbr_race" : "White",
    },
    {
        "mmbr_ssn" : "565008036",
        "mmbr_cms_unique_nbr" : "565008036-A1",
        "mmbr_first_name" : "Doe",
		"mmbr_middle_name" : "Parkar",
        "mmbr_last_name" : "Steve",
        "mmbr_gender" : "M",
        "mmbr_physical_city" : "Jacks",
		"mmbr_physical_state" : "London",
		"mmbr_physical_zip_code" : "32208",
        "mmbr_physical_county" : "US",
        "mmbr_race" : "Black",
    },
    {
        "mmbr_ssn" : "565008037",
        "mmbr_cms_unique_nbr" : "565008037-A1",
        "mmbr_first_name" : "Peterson",
		"mmbr_middle_name" : "evin",
        "mmbr_last_name" : "WillSmith",
        "mmbr_gender" : "M",
        "mmbr_physical_city" : "Jackson",
		"mmbr_physical_state" : "rida",
		"mmbr_physical_zip_code" : "32208",
        "mmbr_physical_county" : "US",
        "mmbr_race" : "White",
    },
]
const findMember=()=>{
    // return axios.get("https://jsonplaceholder.typicode.com/posts")
    return member;
}

const loginUser=(credentials)=>{
    console.log(credentials)
    
         localStorage.setItem('userToken', "12345");
         return credentials
    // const requestOptions = {
    //     method: 'GET',
    //     headers: authHeader(),
    //     data:credentials
    // };
    // axios.post('/api/auth/login', requestOptions)
    //   .then((user) => {
    //     localStorage.setItem('jwtToken', user.data.token);
    // return user;
    //   })
    //   .catch((error) => {
    //     if(error.response.status === 401) {
    //       this.setState({ message: 'Login failed. Username or password not match' });
    //     }
    //   });
}

export default {findMember,loginUser}
