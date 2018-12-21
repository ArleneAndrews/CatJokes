import ReactTestUtils from 'react-dom/test-utils';

describe('index.android', () => {
    describe('render', () => {
        //checks to insure that the loading screen is rendered
        const component = ReactTestUtils.renderIntoDocument(renderLoadingView);
        it("If a joke is not ready to load", () => {
            var text = ReactTestUtils.findRenderedDOMComponentWithTag(
                component, 'text'
            )
        });
    })
});