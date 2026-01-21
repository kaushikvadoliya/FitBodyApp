import React, { useEffect, useMemo, useState } from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import { FlatList, Text, View } from 'react-native';
import styles from './style';
import Button from '../../components/Button';
import SearchBar from '../../components/SearchBar';
import ExpandableItem from '../../components/ExpandableItem';
import { faq } from './data';
import SettingItem from '../../components/SettingItem';

const HelpScreen = () => {
  const [activeTab, setActiveTab] = useState<string>('FAQ');
  const [activeCategory, setActiveCategory] = useState<string>('General');
  const [search, setSearch] = useState<string>('');
  const [debounce, setDebounce] = useState<string>(search);

  const data =
    activeCategory === 'General'
      ? faq.general
      : activeCategory === 'Account'
      ? faq.account
      : faq.service;

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  const filterData = useMemo(() => {
    return data.filter(item =>
      item.title?.toLowerCase().includes(debounce.toLowerCase()),
    );
  }, [debounce, data]);

  return (
    <Layout>
      <Header text="Help & FAQs" backButton />
      <View style={styles.mainContainer}>
        <Text style={styles.heading}>How Can We Help You?</Text>
        <View style={styles.buttoncontainer}>
          <View style={styles.tabContainer}>
            <Button
              varient="lg"
              text="FAQ"
              onPress={() => setActiveTab('FAQ')}
              select={activeTab}
            />
            <Button
              varient="lg"
              text="Contact Us"
              onPress={() => setActiveTab('Contact Us')}
              select={activeTab}
            />
          </View>
          {activeTab === 'FAQ' && (
            <View style={styles.categoryContainer}>
              <Button
                varient="md"
                text="General"
                onPress={() => setActiveCategory('General')}
                select={activeCategory}
              />
              <Button
                varient="md"
                text="Account"
                onPress={() => setActiveCategory('Account')}
                select={activeCategory}
              />
              <Button
                varient="md"
                text="Services"
                onPress={() => setActiveCategory('Services')}
                select={activeCategory}
              />
            </View>
          )}
          {activeTab === 'FAQ' && (
            <SearchBar value={search} onChangeText={setSearch} varient="lg" />
          )}
        </View>
        {activeTab === 'FAQ' && (
          <View style={styles.faqContainer}>
            <FlatList
              bounces={false}
              data={filterData}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <ExpandableItem
                  title={item.title}
                  description={item.description}
                />
              )}
            />
          </View>
        )}
        {activeTab === 'Contact Us' && (
          <View style={styles.contactUsContainer}>
            <SettingItem
              icon={require('../../assets/icons/support.png')}
              text="Customer service"
              buttonIcon={require('../../assets/icons/downArrow.png')}
            />
            <SettingItem
              icon={require('../../assets/icons/website.png')}
              text="Website"
              buttonIcon={require('../../assets/icons/downArrow.png')}
            />
            <SettingItem
              icon={require('../../assets/icons/whatshapp.png')}
              text="Whatshapp"
              buttonIcon={require('../../assets/icons/downArrow.png')}
            />
            <SettingItem
              icon={require('../../assets/icons/facebook.png')}
              text="Facebook"
              buttonIcon={require('../../assets/icons/downArrow.png')}
            />
            <SettingItem
              icon={require('../../assets/icons/insta.png')}
              text="Instagram"
              buttonIcon={require('../../assets/icons/downArrow.png')}
            />
          </View>
        )}
      </View>
    </Layout>
  );
};

export default HelpScreen;
