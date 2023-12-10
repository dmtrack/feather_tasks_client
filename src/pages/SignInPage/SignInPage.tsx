import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

function SignInPage() {
    const navigate = useNavigate();

    return <div>SignInPage</div>;
}

export default memo(SignInPage);
