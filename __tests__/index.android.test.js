import { getInitialState } from './index.android';

 describe('index.android', () => {
    /*describe('render', () => {
        //checks to insure that the loading screen is rendered
        const component = ReactTestUtils.renderIntoDocument(renderLoadingView);
        it("If a joke is not ready to load", () => {
            var text = ReactTestUtils.findRenderedDOMComponentWithTag(
                component, 'text'
            )
        });
    })
}); */
    describe('Initial Values', () => {
        it("The initial value of joke is null", () => {
            it('State value on opening', () => {
                const expected = { name:'joke', value: 'null' }
                const actual = { name: 'joke' }
                expect(getInitalState(actual)).toMatchObject(getInitalState(expected))
            });
        })
    });
 
 });

/* //checks to insure that there is nothing in the values
joke.toEqual(null)
joke.answer.toEqual('')
previosJoke.toEqual(null)
previousJokeAnswer.toEqual('')

render joke view
mock joke (3) First joke, second joke, third joke
get math result
display.toEqual mock joke X

previous joke
mock joke again
get math result
show joke
trigger change
display.toEqual mock answer x

answer
mock answer First answer, second answer, third answer
display to equal */