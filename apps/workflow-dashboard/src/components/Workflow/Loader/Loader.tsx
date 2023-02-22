import React from 'react';
import { View } from '../../../primitives/View';

type LoaderProps = {
    loading: boolean;
}

export function Loader({ loading }: LoaderProps) {
    return loading ? (
        <View className="workflow-loader d-flex justify-content-center align-items-center">
            <div className="spinner-border text-dark" role="status">
                <p className="visually-hidden">Loading...</p>
            </div>
        </View>
    ) : null;
}