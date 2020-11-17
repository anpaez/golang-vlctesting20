FROM golang:alpine3.10

# Set the Current Working Directory inside the container
WORKDIR /app

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

RUN go get github.com/gorilla/mux

# Copy the source from the current directory to the Working Directory inside the container
COPY . .

# Build the Go app
RUN go build -o main .

# Expose port 8080 to the outside world
EXPOSE 8080

# Run the executable
CMD ["./main"]