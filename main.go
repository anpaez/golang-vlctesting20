package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func homePage(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Welcome to the HomePage!")
	fmt.Println("Endpoint Hit: homePage")
}

func handleRequests() {

	// Init router
	r := mux.NewRouter()

	// http.HandleFunc("/", homePage)
	r.HandleFunc("/hola/{nombre}", hello).Methods("GET")
	r.HandleFunc("/hola", helloVLCTesting).Methods("GET")
	log.Fatal(http.ListenAndServe(":8080", r))
}

func hello(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r) // Gets params

	response := "¡Hola " + params["nombre"] + "!"
	fmt.Println(response)
	fmt.Fprintf(w, response)
}

func helloVLCTesting(w http.ResponseWriter, r *http.Request) {
	response := "<h1>¡Hola VLCTesting, Bienvenido!</h1>"
	fmt.Println(response)
	fmt.Fprintf(w, response)
}

func main() {
	handleRequests()
}
