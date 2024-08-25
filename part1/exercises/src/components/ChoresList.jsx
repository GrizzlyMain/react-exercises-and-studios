import React from 'react';
import classes from './ChoresList.module.css';

export default function ChoresList() {
      const chores = ["Mow Lawn", "Stain Fence", "Plant Seeds", "Mulch Beds"];
      return (
   
      <div>
         <h3 className = {classes.choresHeading}>Chores</h3>
         <ol>
         <li className={classes.choresText} for={chores[0]}>
            <input type="checkbox" id={chores[0]} />
           {chores[0]}</li>
           <li className={classes.choresText} for={chores[1]}><input type="checkbox" id={chores[1]} />
            {chores[1]}</li>
            <li className={classes.choresText} for={chores[2]}><input type="checkbox" id={chores[2]} />
            {chores[2]}</li>
            <li className={classes.choresText} for={chores[3]}> <input type="checkbox" id={chores[3]} />
            {chores[3]}</li>
         </ol>
      </div>
      
      );
   }
