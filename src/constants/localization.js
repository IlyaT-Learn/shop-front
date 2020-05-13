const TextInformation = () => {
    return {
        LoginPage: {
            FirstBlock: {
                header: 'New Customer',
                explanation: 'Register Account',
                description: 'By creating an account you will be able to shop faster, be up to date on an order\'s status, and keep track of the orders you have previously made.',
                buttonText: 'Continue'
            },
            SecondBlock: {
                header: 'Returning Customer',
                explanation: 'I am a returning customer',
                components: {
                    first: 'E-Mail Address',
                    second: 'Password'
                },
                linkText: 'Forgotten Password',
                buttonText: 'LOGIN'
            }
        }
    }
}

export default TextInformation;