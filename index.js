const App = () => {
    const [message, setMessage] = React.useState("Hello, React without a build tool!");

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>{message}</h1>
            <button onClick={() => setMessage("You clicked the button!")}>
                Click Me
            </button>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

