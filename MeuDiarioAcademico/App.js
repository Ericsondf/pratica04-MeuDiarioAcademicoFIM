import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Switch,
} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

import {
  APP_TITLE,
  INPUT_PLACEHOLDER,
  BUTTON_LABEL,
  LIST_TITLE,
  SWITCH_LABEL,
} from './labels';

const DISCIPLINAS = [
  { id: '1', nome: 'Programação para Dispositivos Móveis' },
  { id: '2', nome: 'Engenharia de Software' },
  { id: '3', nome: 'Banco de Dados II' },
  { id: '4', nome: 'Redes de Computadores' },
];

export default function App() {
  const [texto, setTexto] = useState('');
  const [somenteObrigatorias, setSomenteObrigatorias] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.marginRule} />

        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.eyebrow}>CADERNO 2026 · 1º SEMESTRE</Text>
            <Text style={styles.headerTitle}>{APP_TITLE}</Text>
          </View>

          <View style={styles.formRow}>
            <TextInput
              style={styles.input}
              placeholder={INPUT_PLACEHOLDER}
              placeholderTextColor="#9A8F76"
              value={texto}
              onChangeText={setTexto}
            />

            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
              ]}
              onPress={() => setTexto('')}
            >
              <Text style={styles.buttonText}>{BUTTON_LABEL}</Text>
            </Pressable>
          </View>

          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>{SWITCH_LABEL}</Text>
            <Switch
              value={somenteObrigatorias}
              onValueChange={setSomenteObrigatorias}
              trackColor={{ false: '#D9CBA8', true: '#8C2F2B' }}
              thumbColor="#FBF8F0"
              ios_backgroundColor="#D9CBA8"
            />
          </View>

          <Text style={styles.listTitle}>{LIST_TITLE}</Text>
          <View style={styles.list}>
            {DISCIPLINAS.map((disciplina, index) => (
              <View key={disciplina.id} style={styles.listItem}>
                <Text style={styles.listItemIndex}>
                  {String(index + 1).padStart(2, '0')}
                </Text>
                <Text style={styles.listItemText}>{disciplina.nome}</Text>
              </View>
            ))}
          </View>
        </View>

        <StatusBar style="dark" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const serif = Platform.select({ ios: 'Georgia', android: 'serif', default: 'serif' });

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F6F1E4',
  },
  marginRule: {
    position: 'absolute',
    left: 46,
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: '#B33A34',
    opacity: 0.55,
  },
  container: {
    flex: 1,
    paddingTop: 24,
    paddingRight: 22,
    paddingLeft: 66,
  },
  header: {
    marginBottom: 22,
    borderBottomWidth: 2,
    borderBottomColor: '#D9CBA8',
    paddingBottom: 14,
    alignItems: 'flex-start',
  },
  eyebrow: {
    fontSize: 11,
    letterSpacing: 2,
    color: '#8C2F2B',
    fontWeight: '700',
    marginBottom: 6,
  },
  headerTitle: {
    fontFamily: serif,
    fontSize: 26,
    fontWeight: '700',
    color: '#232B36',
    letterSpacing: 0.3,
  },
  formRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  input: {
    width: '68%',
    borderWidth: 1.5,
    borderColor: '#D9CBA8',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#FBF8F0',
    color: '#232B36',
    fontSize: 15,
  },
  button: {
    flex: 0.28,
    backgroundColor: '#8C2F2B',
    borderRadius: 4,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    backgroundColor: '#6B211E',
  },
  buttonText: {
    color: '#F6F1E4',
    fontWeight: '700',
    fontSize: 14,
    letterSpacing: 0.5,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  switchLabel: {
    fontSize: 14,
    color: '#5B6472',
  },
  listTitle: {
    fontFamily: serif,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    color: '#232B36',
    letterSpacing: 0.2,
  },
  list: {
    flex: 1,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FBF8F0',
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginBottom: 10,
    borderRadius: 6,
    borderLeftWidth: 4,
    borderLeftColor: '#8C2F2B',
  },
  listItemIndex: {
    fontFamily: serif,
    fontSize: 13,
    color: '#B33A34',
    fontWeight: '700',
    marginRight: 12,
  },
  listItemText: {
    fontSize: 15,
    color: '#232B36',
  },
});
