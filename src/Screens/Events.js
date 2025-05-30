import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Calendar } from 'react-native-calendars';

// Import images (ensure the path is correct)
const id1Image = require('../Assets/id1.jpg');
const id2Image = require('../Assets/id2.jpg');
const id3Image = require('../Assets/id3.jpg');
const id4Image = require('../Assets/id4.png');

const Events = ({ navigation }) => {
  // State to manage modal visibility, selected image, and filtered events
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [calendarModalVisible, setCalendarModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]); // State for filtered events

  // Static event data with image references
  const eventData = [
    {
      id: '1',
      headline: 'Cyber Security Event for Learning',
      description: 'This event encourages students to participate in different platforms where they will make changes in society.',
      place: 'SVSU W1 Block',
      date: '23/05/2025',
      time: '4:00 PM',
      image: id1Image,
    },
    {
      id: '2',
      headline: 'Cyber Security Event for Learning',
      description: 'This event encourages students to participate in different platforms where they will make changes in society.',
      place: 'SVSU E1 Block',
      date: '23/05/2025',
      time: '4:00 PM',
      image: id2Image,
    },
    {
      id: '3',
      headline: 'Cyber Security Event for Learning',
      description: 'This event encourages students to participate in different platforms where they will make changes in society.',
      place: 'SVSU W3 Block',
      date: '25/05/2025',
      time: '4:00 PM',
      image: id3Image,
    },
    {
      id: '4',
      headline: 'Cyber Security Event for Learning',
      description: 'This event encourages students to participate in different platforms where they will make changes in society.',
      place: 'SVSU E2 Block',
      date: '28/05/2025',
      time: '4:00 PM',
      image: id4Image,
    },
  ];

  // Function to convert DD/MM/YYYY to YYYY-MM-DD for comparison
  const convertToCalendarFormat = (date) => {
    const [day, month, year] = date.split('/');
    return `${year}-${month}-${day}`;
  };

  // Initialize filteredEvents with all events
  useEffect(() => {
    setFilteredEvents(eventData);
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        height: 90,
        elevation: 6,
        shadowColor: '#018AD8',
        shadowOpacity: 0.8,
        shadowRadius: 6,
        bodercolor:'white',
        boderwidth:2,
        backgroundColor: 'white',
      },
      headerTintColor: '#233FCC',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 30,
      },
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 16 }}
          onPress={() => setCalendarModalVisible(true)}
        >
           <Fontisto name="date" size={30} color="#233FCC" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  // Function to handle image press
  const handleImagePress = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  // Function to handle date selection
  const handleDateSelect = (day) => {
    const selected = day.dateString; // YYYY-MM-DD
    setSelectedDate(selected);
    // Filter events based on selected date
    const filtered = eventData.filter(
      (event) => convertToCalendarFormat(event.date) === selected
    );
    setFilteredEvents(filtered);
    setCalendarModalVisible(false);
  };

  // Function to clear date filter
  const clearDateFilter = () => {
    setSelectedDate('');
    setFilteredEvents(eventData); // Reset to all events
    setCalendarModalVisible(false);
  };

  // Render each event card
  const renderEventCard = ({ item }) => (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={() => handleImagePress(item.image)}>
        <Image source={item.image} style={styles.eventImage} />
      </TouchableOpacity>
      <Text style={styles.headline}>{item.headline}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.placeDateContainer}>
          <Text style={styles.place}>{item.place}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {filteredEvents.length === 0 && selectedDate ? (
        <View style={styles.noEventsContainer}>
          <Text style={styles.noEventsText}>No Events Placed</Text>
          <TouchableOpacity style={styles.clearButton} onPress={clearDateFilter}>
            <Text style={styles.clearButtonText}>Clear Date Filter</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <FlatList
            data={filteredEvents}
            renderItem={renderEventCard}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
          />
          {selectedDate && filteredEvents.length > 0 && (
            <TouchableOpacity style={styles.backButton} onPress={clearDateFilter}>
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
          )}
        </>
      )}
      {/* Modal for enlarged image */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedImage && (
              <Image source={selectedImage} style={styles.enlargedImage} />
            )}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* Modal for calendar */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={calendarModalVisible}
        onRequestClose={() => setCalendarModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.calendarModalContent}>
            <Calendar
              onDayPress={handleDateSelect}
              markedDates={{
                [selectedDate]: { selected: true, selectedColor: '#40ACFF' },
              }}
              theme={{
                calendarBackground: '#fff',
                textSectionTitleColor: '#40ACFF',
                selectedDayBackgroundColor: '#40ACFF',
                selectedDayTextColor: '#fff',
                todayTextColor: '#40ACFF',
                dayTextColor: '#333',
                textDisabledColor: '#d9e1e8',
                arrowColor: '#40ACFF',
              }}
            />
            <View style={styles.calendarButtonContainer}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setCalendarModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 10,
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 18,
    elevation: 6,
    shadowColor: '#018AD8',
    shadowOpacity: 0.8,
    shadowRadius: 6,
     borderColor:'#CECECE',
        borderWidth:2,
  },
  eventImage: {
    width: '100%',
    height: 190,
    borderRadius: 10,
    marginBottom: 10,
  },
  headline: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeDateContainer: {
    flexDirection: 'column',
  },
  place: {
    fontSize: 14,
    fontWeight: '600',
    color: '#505050',
  },
  date: {
    fontSize: 14,
    color: '#333',
  },
  time: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
  noEventsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noEventsText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
  },
  clearButton: {
    backgroundColor: '#40ACFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#40ACFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginVertical: 10,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    alignItems: 'center',
  },
  calendarModalContent: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  calendarButtonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  enlargedImage: {
    width: '100%',
    height: 400,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: '#40ACFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Events;