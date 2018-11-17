import React, { Component } from 'react';
import Person from './Person';
import './People.css';
import peopleList from "../data.json"

class People extends Component {
  
  render() {
    let peopleListRaw = peopleList.map(person => {
      return (
        <Person picture={person.picture}
        altText={person.altText} 
        name={person.name} 
        country={person.country} 
        tags={person.tags} 
        history={person.history} 
        dates={person.dates}
        link={person.link}/>
      );
    });
    return (
      <section className="People">
      {peopleListRaw}
      </section>
    );
  }
}

export default People;
