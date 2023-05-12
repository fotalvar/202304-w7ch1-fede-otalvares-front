# ROBOTS

## Data Layer

### Data

- Collection of Robots
  - \_id -> string
  - name -> string
  - image-url -> string
  - velocity -> number (0-10)
  - resilence -> number (0-10)
  - creation-date -> number

### Modifications

- loadRobots
- loadRobot
- addRobot
- deleteRobot
- updateRobot

### Components

## App

- Receives a collection of Robots
- Shows the title of the app
- Renders a RobotsList component
- Renders a RobotsForm component

## RobotsList

- Receives a collection of Robots
- Renders RobotCard

## RobotCard

- Receives a Robot
- Shows the Robot's image
- Shows the Robot's name
- Renders a Button:
  - text: "delete"
  - actionOnClick: handleClick

## Button

- Receives a text
- Receives an action on click
- Shows a Button with the received text
- Calls the received action when the button is clicked

## RobotForm

- Shows an input text for the name of the Robot
- Shows an input text for the url of the image of the Robot
- Shows an input type number for the Velocity of the Robot
- Shows an input type number for the Resilence of the Robot
- Shows an input type Date for the Creation Date of the Robot
- Shows a Button with the text :
  - text : create || modify
  - actionOnclick: handle click
