/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722519969", {
    template: `
    <footer id="footer-section" style="min-height: 350px" class="flex-1 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 backdrop-blur-md bg-opacity-30">
            <div id="footer-container" class="max-w-screen-xl p-8 py-12 mx-auto lg:py-20 md:p-12 lg:p-16 rounded-3xl shadow-lg backdrop-filter backdrop-blur-lg bg-white bg-opacity-10">
                <hr id="footer-divider" class="my-8 border-purple-300 sm:mx-auto opacity-30 lg:my-10">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-6 text-3xl font-bold text-white">
                            <img id="footer-logo" src="https://makeinfinite-mentat-test.azurewebsites.net/get_image/tmps58ggtyj/logo.svg" class="h-8 mr-4 sm:h-10 filter brightness-0 invert" alt="Landwind Logo" />
                            CricScore - Real-time Cricket Scores
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-lg text-center text-pink-100">
                        Stay updated with live cricket scores, news, and stats from around the world. Download our app today!
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
