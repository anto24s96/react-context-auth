import { useAuth } from "../contexts/AuthContext";

export default function () {
    const { login } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        login();
    };
    return (
        <div>
            <form onSubmit={handleLogin}>
                <button type="submit" className="my-button">
                    Loggati
                </button>
            </form>
        </div>
    );
}
