import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { React, useState, useEffect } from "react";
import ClassForm from "../../components/classForm";
// import { CustomButton } from "../../components/CustomButton";
import { router } from "expo-router";

const addClass = () => {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    courseTitle: " ",
    courseNumber: 0,
    courseDescription: " ",
    startDate: " ",
    endDate: " ",
    professorName: " ",
    areaOfStudy: " ",
    daysOfWeek: " ",
    hoursOfDay: " ",
  });

  const validateForm = () => {
    let errors = {};

    // Validate Course Title field
    if (!form.courseTitle) {
      errors.title = "Course Title is required.";
    }

    // Validate course number field
    if (!form.courseNumber) {
      errors.number = "Course Number is required.";
    } else if (isNaN(form.courseNumber)) {
      errors.number = "Must input a number.";
    }

    // Validate password field
    if (!form.courseDescription) {
      errors.description = "Course Description is required.";
    } else if (form.courseDescription.length > 150) {
      errors.description =
        "Course Description must be less than 150 characters.";
    }

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.warn("Submitted");
      setForm((form.courseTitle = ""));
      setErrors({});
    }
  };

  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Class Form</Text>
      </View>
      <ScrollView style={styles.scroll}>
        <View>
          <ClassForm
            title="Course Title"
            value={form.courseTitle}
            handleChangeText={(e) => setForm({ ...form, courseTitle: e })}
          ></ClassForm>
          {errors.courseTitle ? (
            <Text style={styles.errors}>{errors.courseTitle}</Text>
          ) : null}
          <ClassForm
            title="Course Number"
            value={form.courseNumber}
            handleChangeText={(e) => setForm({ ...form, courseNumber: e })}
          ></ClassForm>
          <ClassForm
            title="Course Description"
            value={form.courseDescription}
            handleChangeText={(e) => setForm({ ...form, courseDescription: e })}
          ></ClassForm>
          <ClassForm
            title="Start Date"
            value={form.startDate}
            handleChangeText={(e) => setForm({ ...form, startDate: e })}
          ></ClassForm>
          <ClassForm
            title="End Date"
            value={form.endDate}
            handleChangeText={(e) => setForm({ ...form, endDate: e })}
          ></ClassForm>
          <ClassForm
            title="Professor Name"
            value={form.professorName}
            handleChangeText={(e) => setForm({ ...form, professorName: e })}
          ></ClassForm>
          <ClassForm
            title="Area of Study"
            value={form.areaOfStudy}
            handleChangeText={(e) => setForm({ ...form, areaOfStudy: e })}
          ></ClassForm>
          <ClassForm
            title="Days of Week"
            value={form.daysOfWeek}
            handleChangeText={(e) => setForm({ ...form, daysOfWeek: e })}
          ></ClassForm>
          <ClassForm
            title="Hours of Day"
            value={form.hoursOfDay}
            handleChangeText={(e) => setForm({ ...form, hoursOfDay: e })}
          ></ClassForm>
        </View>
      </ScrollView>
      <View style={styles.button}>
        <Button title={"Submit Form"} handlePress={handleSubmit} />
      </View>
    </>
  );
};

export default addClass;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#0c9cd4",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 44,
  },
  headerTitle: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    marginTop: 4,
  },

  button: {
    height: 33,
    marginLeft: 144,
    marginBottom: 30,
    marginTop: 1,
    justifyContent: "center",
  },
  errors: {
    color: "red",
    margin: 5,
  },
});
