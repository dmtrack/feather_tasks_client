import React, { memo } from 'react';

import { FooterWrapper, FooterContainer } from './Footer.style';

function Footer() {
    return (
        <FooterWrapper>
            <FooterContainer />
        </FooterWrapper>
    );
}

export default memo(Footer);
