import React, {ReactNode} from "react";

type Props = {fallback: ReactNode, onError?: (error:any, errorInfo: any) => void};

class ErrorBoundary extends React.Component<Props, any> {
    constructor(props:any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error:any) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error:any, errorInfo:any) {
        // You can also log the error to an error reporting service
        if (this.props.onError){
            this.props.onError(error, errorInfo);
        }
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <div>{this.props.fallback}</div>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;