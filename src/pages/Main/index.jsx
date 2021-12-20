import React, { Component } from 'react'
import Navbar from '../Navbar'
import SubNav from '../SubNav'
import Section from '../Section'
import Footer from '../Footer'
import Basic from '../Basic'
import { Box } from './styled.js'
export default class index extends Component {
    render() {
        return (
            <div>
                <Box>
                    <Navbar/>
                    <SubNav/>
                    <Section/>
                    <Footer/>
                    <Basic/>
                </Box>
            </div>
        )
    }
}