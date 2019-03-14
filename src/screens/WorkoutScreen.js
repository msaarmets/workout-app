import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import i18n from "../i18n/i18n";
import styles from "../styles/styles";
import globals from "../globals";
import { Icon } from "react-native-elements";
import WorkoutsList from "../data/workouts";
import Counter from "../Components/counter";

class WorkoutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: -1,
      workout: "",
      workoutCount: 0,
      totalCount: 0,
      workoutFinished: false,
      rest: false
    };
    this.interval;
    this.handleWorkout = this.handleWorkout.bind(this);
    this.initInterval = this.initInterval.bind(this);
    this.withDifficulty = this.withDifficulty.bind(this);
    this.handleRest = this.handleRest.bind(this);
  }

  componentWillMount() {
    // Load first element from workouts list
    this.setState({
      workout: WorkoutsList[0].name,
      timeLeft: this.withDifficulty(WorkoutsList[0].time),
      workoutCount: 1,
      totalCount: WorkoutsList.length
    });
    // Start the timer
    setTimeout(() => {
      this.initInterval();
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (this.state.workoutFinished) {
      return (
        <View style={styles.container}>
          <Text style={styles.header}>{i18n.t("Workout finished")}!</Text>
          <Icon name="trophy" type="font-awesome" color="#517fa4" size={200} />
        </View>
      );
    } 
    else if(this.state.rest && this.state.timeLeft >= 0){
      return(
        <View style={styles.container}>
        <Text style={styles.header}>{i18n.t("Prepare for next exercise")}...</Text>
        <Counter time={this.state.timeLeft}/>
        </View>
      )
    }
    
    else if (this.state.timeLeft >= 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.header}>{i18n.t(this.state.workout)}</Text>
          <Counter time={this.state.timeLeft} />
          <Text style={styles.text}>
            {this.state.workoutCount}/{this.state.totalCount}
          </Text>
        </View>
      );
    } else if (this.state.timeLeft < 0) {
      const self = this;
      setTimeout(function() {
        self.handleWorkout();
      }, 100);
      return (
        <View style={styles.container}>
          <View style={[styles.container, { flex: 10 }]}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
          <View
            style={[styles.container, { flex: 1, justifyContent: "flex-end" }]}
          >
            <Text style={styles.text}>
              {this.state.workoutCount}/{this.state.totalCount}
            </Text>
          </View>
        </View>
      );
    } else {
      {
        this.props.navigation.navigate("Homescreen");
      }
      return null;
    }
  }

  handleWorkout() {
    // Switch rest value
    const rest = !this.state.rest;
    this.handleRest();

    if (!rest) {
      // Select the next workout from list
      const workout = WorkoutsList[this.state.workoutCount];
      if (workout) {
        this.setState({
          timeLeft: this.withDifficulty(workout.time),
          workout: workout.name,
          workoutCount: this.state.workoutCount + 1
        });
      }
      // After the last element is handled
      else {
        clearInterval(this.interval);
        this.setState({ workoutFinished: true });
      }
    }
  }

  initInterval() {
    const self = this;
    this.interval = setInterval(function() {
      self.setState({ timeLeft: self.state.timeLeft - 1 });
    }, 1000);
  }

  // Calculate time based on choosed difficulty
  withDifficulty(time) {
    const calculatedTime = Math.ceil((time * globals.level) / 100);
    return calculatedTime;
  }

  handleRest(){
    // Switch rest value and set timer to 10 seconds
      if (this.state.workoutCount != this.state.totalCount) {
        this.setState({
          rest: !this.state.rest,
          timeLeft: 10
        })
      }
      // After the last element is handled
      else {
        clearInterval(this.interval);
        this.setState({ workoutFinished: true });
      }    
  }
}

export default WorkoutScreen;
