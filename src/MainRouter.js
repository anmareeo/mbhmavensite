import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import SearchAppBar from "./SearchAppBar"
import About from './About'
import Types from './Types'
import Photos from './Photos'
import Contact from './Contact'
import MainPage from './MainPage'
import {ThemeProvider} from '@material-ui/styles'
import {createMuiTheme} from '@material-ui/core/styles'
import cyan from '@material-ui/core/colors/cyan'

const theme = createMuiTheme({
    palette: {
        primary: cyan
    }
})

export default function MainRouter(){
    return(
        <div> 
            <ThemeProvider theme = {theme}>
            <Router>
                <SearchAppBar></SearchAppBar>
                <Switch>
                    <Route  path = "/about" component = {About}></Route>
                    <Route  path = "/photos" component = {Photos}></Route>
                    <Route  path = "/types" component = {Types}></Route>
                    <Route  path = "/contact" component = {Contact}></Route>
                    <Route  path = "/" component = {MainPage}></Route>
                </Switch>
            </Router>
            </ThemeProvider>
        </div>
    )
}