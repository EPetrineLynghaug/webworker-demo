# Web Workers Overview - notes.


## Description
Web Workers allow you to run tasks in the background without interrupting the main event loop. They are especially useful for handling heavy computations or I/O-bound tasks. In today’s lecture, for example, we used Amiibo to fetch data with a web worker.


## Key Features of Web Workers
    	•Concurrency: Perform heavy tasks in the background 
         without disrupting the UI.
	•Isolated Context: Web workers run in a separate 
        environment, making them ideal for handling tasks independently.
	•Communication via Messaging: Web workers use 
        postMessage to send messages between workers, allowing systems to communicate
        between different sides of the application.
	•calability with Multiple Workers: You can have 
        multiple workers running simultaneously, and even add service workers for additional background tasks. 

## Types of Web Workers
    	1.Dedicated Workers: Run within a single script and 
        cannot be shared between different scripts.
	2.Shared Workers: Can be shared between different 
        scripts or browser windows.
	3.Service Workers: Usually used to handle tasks in the 
        background, like caching or handling network requests.


## Common Use Cases for Web Workers
	Web workers are particularly helpful when dealing with tasks that are too heavy to run on the main thread:

	•Heavy Calculations: Tasks such as matrix operations 
        or scientific computations.
	•Large Image Editing: For example, applying filters 
        to a large gallery of images.
	•Handling I/O: Fetching large files from a server or 
        processing data from WebSockets.
	•Parallel Programming: Handling complex simulations 
        or tasks that can run concurrently.
	•Data Parsing and Formatting: Parsing large JSON, 
        XML, or CSV files.
	•Machine Learning and AI: Running complex AI 
        algorithms in the background.
	•Background Sync: Sync data in the background or 
        create installable Progressive Web Apps (PWAs).
	•Cryptography: Encrypting, decrypting, generating
         keys, or working with digital signatures.
	•WebAssembly: For high-performance tasks like 3D 
        rendering or web-based games.
	•Collaboration Tools: Real-time tools like Google 
        Docs use web workers to handle background processes.
	•Event-Driven Applications: In apps where events are 
        constantly triggered, web workers allow for more efficient event handling.

## Example Use Case: Cryptography
    One typical use case for a web worker is performing cryptographic tasks, such as hashing or salting passwords. Web workers allow you to handle this in the background, making it ideal for resource-intensive processes without slowing down the user interface.

## Conclusion
    Web workers are powerful tools that help improve the performance and responsiveness of web applications by allowing resource-intensive tasks to be offloaded to background processes. In this project, we’ve explored how to integrate hashing and salting techniques using web workers for better cryptographic handling.

