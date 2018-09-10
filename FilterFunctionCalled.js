import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import data from './FilterFunction';

const items = [{
    "id": 1,
    "job": "Software",
    "skill": ['coding','testing','reqiurement_analysis'],
    "experience":1,
    "location": "Delhi"
},{
    "id": 2,
    "job": "Web Development",
    "skill": ['coding','testing','reqiurement_analysis'],
    "experience":3,
    "location": "Pune"
},{
    "id": 3,
    "job": "App Development",
    "skill": ['Android','java','sdk', 'c++'],
    "experience":5,
    "location": "Bengaluru"
},{
    "id": 4,
    "job": "Android App Development",
    "skill": ['business process', 'outsourcing', 'operations', 'git'],
    "experience":5,
    "location": "Bengaluru"
},{
    "id": 5,
    "job": "Software developer",
    "skill": ['software development', 'software engineering', 'java', 'c++'],
    "experience":1,
    "location": "Chennai"
},{
    "id": 6,
    "job": "php developer",
    "skill": ['javascript', 'css', 'ajax', 'jquery', 'php'],
    "experience":3,
    "location": "Noida"
},{
    "id": 7,
    "job": "Software developer",
    "skill": ['Python', 'Ruby on Rails', 'software development'],
    "experience":2,
    "location": "Bengaluru"
},{
    "id": 8,
    "job": "Team lead: Server and Database",
    "skill": ['css', 'html', 'jquery', 'mysql', 'json', 'xml'],
    "experience":4,
    "location": "Delhi"
},{
    "id": 9,
    "job": "MS SQL DBA",
    "skill": ['sql dba', 'clustring', ],
    "experience":2,
    "location": "Noida"
},{
    "id": 10,
    "job": "Application Development",
    "skill": ['Linux', 'Hibernate', 'core java', 'shell scripting'],
    "experience":8,
    "location": "Pune"
},{
    "id": 11,
    "job": "Senior Software Developer",
    "skill": ['java', 'mysql', 'angular js', 'REST api','html5'],
    "experience":5,
    "location": "Chennai"
},{
    "id": 12,
    "job": "Software Test Engineer",
    "skill": ['test engineering', 'test planing', 'manual testing'],
    "experience":3,
    "location": "Chennai",
},{
    "id": 13,
    "job": "Quality Analyst",
    "skill": ['quality testing', 'selenium', 'DVB'],
    "experience":4,
    "location": "Bengaluru"
},{
    "id": 14,
    "job": "Software Testing",
    "skill": ['test planning', 'software testing', 'manual testing'],
    "experience":1,     
    "location": "Chennai"
},{
    "id": 15,
    "job": "Android App Development",
    "skill": ['test planning', 'software testing', 'manual testing'],
    "experience":4,
    "location": "Noida"
},{
    "id": 16,
    "job": "Android App Development",
    "skill": ['java', 'mysql', 'angular js', 'REST api','html5'],
    "experience":3,
    "location": "Noida"
},{
    "id": 17,
    "job": "Software Development",
    "skill": ['css', 'html', 'jquery', 'mysql', 'json', 'xml'],
    "experience":2,
    "location": "Bengaluru"
},{
    "id": 18,
    "job": "Web Development",
    "skill": ['css', 'html', 'php', 'javascript'],
    "experience":1,
    "location": "Delhi"
},{
    "id": 19,
    "job": "Web Development",
    "skill": ['css', 'html', 'php', 'javascript'],
    "experience":2,
    "location": "Noida"
},{
    "id": 20,
    "job": "Web Development",
    "skill": ['css', 'html', 'php', 'javascript'],
    "experience":3,
    "location": "Delhi"
}];

filter = {
    location: ["Delhi", "Bengaluru", "Pune"]
  };
export default class FilterFunctionCalled extends Component {
    
    //temp = ["Delhi", "Bengaluru", "Pune"];
    
    functionCall(array, filters) {
        test = this.testMethod(array, filters);
        console.log(test);
     }
     testMethod = (array, filters) => {
        const filterKeys = Object.keys(filters);
        // filters all elements passing the criteria
        return array.filter((item) => {
            // dynamically validate all filter criteria
            return filterKeys.every(key => !!~filters[key].indexOf(item[key]));
        });
    }
    
    render() {
        return(
            <View>
                <Text>Hello World</Text>
                <Button 
                title = "Press me"
                onPress = {() => this.functionCall(items, filter)}
                />
            </View>
        );
    }
}