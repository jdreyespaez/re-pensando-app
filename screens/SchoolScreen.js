import React from "react";
import firebase from "firebase";
import {
	ScrollView,
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Picker
} from "react-native";
import { Constants } from "expo";
import Boton from "../common/Boton";
import Input from "../common/Input";
import Spinner from '../common/Spinner';


export default class SchoolScreen extends React.Component {
	static navigationOptions = {
		header: null
	};

	// Aquí es donde definiremos el State de este componente
	constructor() {
		super();
		this.state = {
			PickerValue: '',
			email: '',
			password: '',
			error: '',
			loading: false,
		};
	}

	onPressGuardar = () => {
		const { email, password } = this.state;

		this.setState({ error: '', loading: true });

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess.bind(this))
					.catch(this.onLoginFail.bind(this));
			});
		// this.props.navigation.push("CongratsScreen");
	};

	onLoginFail() {
		this.setState({ error: "La autenticación falló.", loading: false });
	}

	onLoginSuccess() {
		this.setState({
			email: '',
			password: '',
			loading: false,
			error: '',
		});
	}

	renderBoton() {
		if (this.state.loading) {
			return <Spinner size='small' />;
		}

		return (
			<Boton style={styles.btn} onPress={this.onPressGuardar}>
				Guardar
      </Boton>
		);
	}

	render() {
		return (
			<ScrollView>
				<View style={styles.container}>
					<View style={styles.regform}>
						<Text style={styles.header}>Colegio</Text>
						<ScrollView>
							<View style={styles.inputContainer}>
								<Input
									placeholder="Tu email para Firebase"
									label="Email FB"
									value={this.state.email}
									onChangeText={email => this.setState({ email })}
								/>
							</View>
							<View style={styles.inputContainer}>
								<Input
									secureTextEntry
									placeholder="Tu pass para Firebase"
									label="Password FB"
									value={this.state.password}
									onChangeText={password => this.setState({ password })}
								/>
							</View>
							<Text style={styles.errorText}>{this.state.error}</Text>
							<View style={styles.inputContainer}>
								<Text style={styles.inputTitle}>NOMBRE COLEGIO</Text>
								<TextInput
									autoCorrect={false}
									style={styles.textInput}
									keyboardType="default"
									placeholder="¿Cuál es tu colegio?"
								/>
							</View>
							<View style={styles.inputContainer}>
								<Text style={styles.inputTitle}>NOMBRES</Text>
								<TextInput
									style={styles.textInput}
									keyboardType="default"
									placeholder="¿Cuáles son tus nombres?"
								/>
							</View>
							<View style={styles.inputContainer}>
								<Text style={styles.inputTitle}>APELLIDOS</Text>
								<TextInput
									style={styles.textInput}
									keyboardType="default"
									placeholder="¿Cuáles son tus apellidos?"
								/>
							</View>
							<View style={styles.inputContainer}>
								<Text style={styles.inputTitle}>ROL</Text>
								<Picker
									style={styles.picker}
									selectedValue={this.state.PickerValue}
									onValueChange={(itemValue, itemIndex) =>
										this.setState({ PickerValue: itemValue })
									}
								>
									<Picker.Item label="Estudiante" value="estudiante" />
									<Picker.Item label="Profesor" value="profesor" />
								</Picker>
							</View>
							<View style={styles.inputContainer}>
								<Text style={styles.inputTitle}>CURSO</Text>
								<Picker
									style={styles.picker}
									selectedValue={this.state.PickerValue}
									onValueChange={(itemValue, itemIndex) =>
										this.setState({ PickerValue: itemValue })
									}
								>
									<Picker.Item label="Noveno A" value="noveno-a" />
									<Picker.Item label="Noveno B" value="noveno-b" />
									<Picker.Item label="Noveno C" value="noveno-c" />
								</Picker>
							</View>
							<View style={styles.inputContainer}>
								<Text style={styles.inputTitle}>CORREO</Text>
								<TextInput
									style={styles.textInput}
									keyboardType="email-address"
									placeholder="¿Cuál es tu correo electrónico?"
								/>
							</View>
							<View style={styles.inputContainer}>
								<Text style={styles.inputTitle}>GÉNERO</Text>
								<Picker
									style={styles.picker}
									selectedValue={this.state.PickerValue}
									onValueChange={(itemValue, itemIndex) =>
										this.setState({ PickerValue: itemValue })
									}
								>
									<Picker.Item label="Masculino" value="masculino" />
									<Picker.Item label="Femenino" value="femenino" />
								</Picker>
							</View>
							<View style={styles.inputContainer}>
								<Text style={styles.inputTitle}>BARRIO</Text>
								<TextInput
									style={styles.textInput}
									keyboardType="default"
									placeholder="¿En qué barrio vives?"
								/>
							</View>
							<View style={styles.inputContainer}>
								<Text style={styles.inputTitle}>CONTRASEÑA</Text>
								<TextInput style={styles.textInput} secureTextEntry={true} />
							</View>
							<View>
								{this.renderBoton()}
							</View>
						</ScrollView>
					</View>
					{/* <Boton style={styles.btn} onPress={this.onPressGuardar}>
						Guardar
          </Boton> */}

				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	regform: {
		alignSelf: "stretch",
		marginLeft: 10,
		marginRight: 10
	},
	header: {
		fontSize: 30,
		fontWeight: "bold",
		color: "#e02c2c",
		paddingBottom: 20,
		paddingTop: 30,
		textAlign: "center"
	},
	inputContainer: {
		alignSelf: "stretch",
		borderColor: "#979797",
		borderWidth: 2,
		height: 60,
		marginBottom: 15
	},
	inputTitle: {
		color: "#979797",
		fontSize: 15,
		fontWeight: "bold",
		marginLeft: 10,
		marginTop: 5
	},
	textInput: {
		color: "#000000",
		height: 40,
		marginLeft: 10,
		marginTop: -5
	},
	picker: {
		// alignSelf: 'stretch',
		marginLeft: 10,
		marginTop: -10
	},
	errorText: {
		fontSize: 20,
		alignSelf: "center",
		color: "#e02c2c"
	},
	container: {
		//flex: 1,
		justifyContent: "center",
		paddingTop: Constants.statusBarHeight,
		padding: 8
	},
	paragraph: {
		margin: 24,
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center"
	},
	btn: {
		margin: 10
	}
});
