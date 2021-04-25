import speech_recognition as sr

# print("Google speech_recognition thinks you said ")

print("Hey there!")

while True:

	recognizer = sr.Recognizer()

	with sr.Microphone() as source:
		audio = recognizer.listen(source)
	
	voice = recognizer.recognize_google(audio)

	if len(voice) == 0:
		print("You said nothing.")

	elif "hello" in voice :
		print("Hello to you to.")

	elif "how are you" in voice :
		print("I m fine. How are you?")

	elif "goodbye" in voice :
		print("Goodbye!")
		break

	else :
		print("Huh")