import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

import carousel from '../../assets/carrosel_1.jpg';

import book1 from '../../assets/book1.jpg';
import book2 from '../../assets/book2.jpg';
import book3 from '../../assets/book3.jpg';
import book4 from '../../assets/book4.jpg';
import book5 from '../../assets/book5.jpg';
import book6 from '../../assets/book6.jpg';

const COLORS = {
  primary: '#AE0000',
  background: '#FAF6EF',
  white: '#FFFFFF',
  gray: '#999',
};

const screenWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
  const books = [book1, book2, book3, book4, book5, book6];

  const recommendedBooks = [
    {
      id: 1,
      image: book3,
      title: 'A Bailarina de Auschwitz',
      author: 'Edith Eva Eger',
    },
    {
      id: 2,
      image: book2,
      title: 'A Sutil Arte de Ligar o F*da-se',
      author: 'Mark Manson',
    },
    {
      id: 3,
      image: book1,
      title: 'The Shining',
      author: 'Stephen King',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.statusBarAbsolute} />

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        
        <View style={{ height: 100 }} />

        <View style={styles.header}>
          <Text style={styles.headerText}>Olá, Cintia!</Text>
        </View>

        <View style={styles.searchContainer}>
          <Ionicons name="menu" size={37} color="#555" />
          <View style={styles.searchBox}>
            <TextInput placeholder="Search" style={styles.input} />
            <Ionicons name="search" size={20} color="#555" />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Continue Lendo...</Text>

        <LinearGradient
          colors={['#AE0000', '#8E5050']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.card}
        >
          <Image
            source={{ uri: 'https://covers.openlibrary.org/b/id/8231996-L.jpg' }}
            style={styles.bookImage}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>The Shining</Text>
            <Text style={styles.cardAuthor}>Stephen King</Text>
          </View>
          <View style={styles.progress}>
            <Text style={styles.progressText}>79%</Text>
          </View>
        </LinearGradient>

        <View style={styles.banner}>
          <Image source={carousel} style={styles.bannerImage} resizeMode="contain" />
          <View style={styles.bannerOverlay}>
            <Text style={styles.bannerText}>10% OFF em Frankenstein</Text>
          </View>
        </View>
        <View style={styles.popularContainer}>
          <Text style={styles.popularTitle}>Mais procurados do momento</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {books.map((item, index) => (
              <Image key={index} source={item} style={styles.popularBook} />
            ))}
          </ScrollView>
        </View>

        <View style={styles.recommendedContainer}>
          <Text style={styles.recommendedTitle}>Recomendados para você</Text>

          {recommendedBooks.map((book) => (
            <TouchableOpacity
              key={book.id}
              style={styles.recommendedBookCard}
              onPress={() => navigation.navigate("BookDetails", { book, navigation })}
              
            >
              <Image source={book.image} style={styles.recommendedBookImage} />

              <View style={styles.bookInfo}>
                <Text style={styles.bookTitle}>{book.title}</Text>
                <Text style={styles.bookAuthor}>{book.author}</Text>

                <View style={styles.rating}>
                  <Ionicons name="star" size={16} color="#FFD700" />
                  <Text style={styles.ratingText}>4.8</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>

      <View style={styles.bottomTab}>
        <Ionicons name="home" size={24} color="white" />
        <Ionicons name="bag" size={24} color="white" />
        <Ionicons name="book" size={24} color="white" />
        <Ionicons name="person" size={24} color="white" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },

  statusBarAbsolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: COLORS.primary,
    zIndex: 1000,
  },

  header: { paddingHorizontal: 45 },
  headerText: { fontSize: 28, fontWeight: 'bold', color: '#555' },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 20,
  },

  searchBox: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 30,
    marginLeft: 10,
    justifyContent: 'space-between',
  },

  input: { flex: 1, marginHorizontal: 10 },

  sectionTitle: {
    marginHorizontal: 15,
    marginTop: 15,
    fontWeight: 'bold',
    color: '#555',
  },

  card: {
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  bookImage: {
    width: 50,
    height: 70,
    borderRadius: 5,
    marginRight: 10,
  },

  cardTitle: { color: '#fff', fontWeight: 'bold' },
  cardAuthor: { color: '#fff', fontSize: 12 },

  progress: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    padding: 10,
    borderRadius: 50,
  },

  progressText: { color: '#fff' },

  banner: {
    marginHorizontal: 15,
    marginTop: 20,
    alignItems: 'center',
  },

  bannerImage: {
    width: screenWidth - 30,
    height: 300,
    borderRadius: 15,
  },

  bannerOverlay: {
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: 'black',
    paddingVertical: 6,
    alignItems: 'center',
  },

  bannerText: { color: 'white', fontWeight: 'bold' },

  popularContainer: {
    backgroundColor: COLORS.primary,
    marginTop: 20,
    paddingVertical: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  popularTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 10,
  },

  popularBook: {
    width: 100,
    height: 150,
    marginLeft: 15,
    borderRadius: 10,
  },

  recommendedContainer: {
    marginHorizontal: 15,
    marginTop: 20,
  },

  recommendedTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#555',
    marginBottom: 15,
  },

  recommendedBookCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
    elevation: 3,
  },

  recommendedBookImage: {
    width: 70,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },

  bookInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },

  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  bookAuthor: {
    fontSize: 14,
    color: '#666',
  },

  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  ratingText: {
    marginLeft: 5,
    fontWeight: 'bold',
  },

  bottomTab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: COLORS.primary,
    padding: 15,
  },
});