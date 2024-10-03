import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Video, ResizeMode } from 'expo-av';  // Import ResizeMode

import { storage } from '../../firebase';  // Import the storage instance
import { ref, getDownloadURL } from "firebase/storage";

export default function Hello() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch the video URL from Firebase Storage
  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        // Create a reference to the video file in Firebase Storage
        const videoRef = ref(storage, 'test.mp4');  // Update this path

        // Get the download URL for the video
        const url = await getDownloadURL(videoRef);
        setVideoUrl(url);
      } catch (error) {
        console.error("Error fetching video URL:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoUrl();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Screen</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        videoUrl && (
          <Video
            source={{ uri: videoUrl }}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}  // Use ResizeMode enum
            style={styles.video}
          />
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  video: {
    width: '100%',
    height: 300,
  },
});
