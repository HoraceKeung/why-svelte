import App from './App.svelte'

const resources = JSON.parse(decodeURIComponent(`
%5B%7B%22date%22%3A%22December%2028%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22vue%22%2C%22react%22%5D%2C%22title%22%3A%22The%20basics%20of%20Svelte%20in%20under%203%20minutes%22%2C%22url%22%3A%22https%3A%2F%2Fzeph.co%2Fsvelte%22%2C%22description%22%3A%22Simpler%20than%20React%3A%20check.%20More%20performant%20than%20React%3A%20check.%20Learn%20the%20basics%20of%20Svelte%20in%20less%20than%203%20minutes.%22%2C%22image%22%3A%22https%3A%2F%2Fzeph.co%2Fassets%2Fimages%2Fsvelte%2Ftwitter.png%22%7D%2C%7B%22date%22%3A%22December%2026%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22vue%22%2C%22react%22%2C%22angular%22%2C%22jquery%22%2C%22backbone%22%5D%2C%22title%22%3A%22Why%20I%20moved%20from%20React%20to%20Svelte%20and%20others%20will%20follow%22%2C%22url%22%3A%22https%3A%2F%2Fwww.mikenikles.com%2Fblog%2Fwhy-i-moved-from-react-to-svelte-and-why-others-will-follow%2F%22%2C%22description%22%3A%22A%20post%20about%20my%20React%20experience%2C%20why%20Svelte%20impressed%20me%20and%20code%20snippets%20to%20compare%20React%20with%20Svelte.%22%2C%22image%22%3A%22https%3A%2F%2Fassets.mikenikles.com%2F2019%2F12%2Faryan-singh-vTBqLytx6SQ-unsplash-1.jpg%22%7D%2C%7B%22date%22%3A%22December%2023%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22vue%22%2C%22react%22%2C%22jquery%22%2C%22backbone%22%5D%2C%22title%22%3A%22New%20kid%20on%20the%20block%22%2C%22url%22%3A%22https%3A%2F%2Fjavascript.christmas%2F2019%2F23%22%2C%22description%22%3A%22The%20world%20of%20front%20end%20frameworks%20is%20always%20evolving.%20For%20years%20it%20was%20dominated%20by%20jQuery%20and%20Backbone%2C%20but%20these%20days%20we%20hear%20most%20talk%20about%20React%20and%20Vue.%20However%2C%20there%20is%20another%20framework%20that%20hasn't%20been%20talked%20about%20so%20much%2C%20namely%20Svelte.%20Although%20this%20framework%20is%20actually%20three%20years%20old%2C%20it%20had%20a%20rebirth%20in%20April%20this%20year%20with%20the%20release%20of%20its%20third%20major%20version.%22%2C%22image%22%3A%22https%3A%2F%2Fimages.unsplash.com%2Fphoto-1555813456-94a3dd418cd3%3Fw%3D1226%26h%3D400%26fit%3Dcrop%26crop%3Dedges%22%7D%2C%7B%22date%22%3A%22December%2022%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22react%22%5D%2C%22title%22%3A%22Consuming%20an%20API%20in%20Svelte%22%2C%22url%22%3A%22https%3A%2F%2Fdev.to%2Fblazephoenix%2Fconsuming-an-api-in-svelte-5181%22%2C%22description%22%3A%22Consuming%20an%20API%20in%20Svelte%20Tanmay%20Naik%20Dec%2022%20%E3%83%BB4%20min%20read%20%23javascript%20%23sveltejs%20%23webdev%20%23beginners%20I'd%20been%20figuring%20out%20Svelte%20since%20a%20week%20now%20and%20saying%20that%20I've%20fallen%20in%20love%20with%20it%20would%20be%20an%20understatement.%20Everything%20is%20so%20much%20faster%20to%20do%20and%20easier%20to%20understand%20that%20you'll%20probably%20...%22%2C%22image%22%3A%22https%3A%2F%2Fdev.to%2Fsocial_previews%2Farticle%2F225445.png%22%7D%2C%7B%22date%22%3A%22December%2020%2C%202019%22%2C%22tags%22%3A%5B%22video%22%5D%2C%22title%22%3A%22dotJS%202019%20-%20Bertrand%20Chevrier%20-%20Svelte%22%2C%22url%22%3A%22https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DpnFA178yDdc%22%2C%22description%22%3A%22Filmed%20at%20https%3A%2F%2F2019.dotjs.io%20on%20December%205-6%2C%202019%20in%20Paris.%20More%20talks%20on%20https%3A%2F%2Fdotconferences.com%2Ftalks%20Svelte%20is%20a%20new%20generation%20of%20web%20framework%2C%20i...%22%2C%22image%22%3A%22https%3A%2F%2Fi.ytimg.com%2Fvi%2FpnFA178yDdc%2Fmaxresdefault.jpg%22%7D%2C%7B%22date%22%3A%22December%2019%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22sapper%22%2C%22react%22%5D%2C%22title%22%3A%22Is%20svelte.js%20the%20user-friendly%20developer%20framework%3F%22%2C%22url%22%3A%22https%3A%2F%2Fopendirective.net%2F2019%2F12%2F19%2Fis-sveltejs-the-user-friendly-developer-framework%2F%22%7D%2C%7B%22date%22%3A%22December%2011%2C%202019%22%2C%22tags%22%3A%5B%22video%22%2C%22sapper%22%2C%22react%22%5D%2C%22title%22%3A%22Let%E2%80%99s%20Learn%20Svelte%20(with%20Rich%20Harris)%20%E2%80%94%20Learn%20With%20Jason%22%2C%22url%22%3A%22https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DogXETl_I0Dg%22%2C%22description%22%3A%22Svelte%20is%20a%20powerful%20framework%20that%20compiles%20code%20to%20framework-less%20app%20vanilla%20JavaScript.%20In%20this%20episode%2C%20Svelte%E2%80%98s%20creator%2C%20Rich%20Harris%22%2C%22image%22%3A%22https%3A%2F%2Fi.ytimg.com%2Fvi%2FogXETl_I0Dg%2Fmaxresdefault.jpg%22%7D%2C%7B%22date%22%3A%22November%2030%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22vue%22%2C%22react%22%2C%22angular%22%5D%2C%22title%22%3A%226%20verses%20of%20Svelte%20haiku%22%2C%22url%22%3A%22https%3A%2F%2Ftjinauyeung.com%2Farticles%2F6-verses-of-svelte-haiku%2F%22%2C%22description%22%3A%22Learn%20about%20v3%20of%20front-end%20framework%20Svelte.js%20through%206%20verses%20of%20haiku%22%2C%22image%22%3A%22https%3A%2F%2Ftjinauyeung.com%2Fstatic%2Fcover-94c6259844ab91779ea3160dcadcde64.jpg%22%7D%2C%7B%22date%22%3A%22November%2019%2C%202019%22%2C%22tags%22%3A%5B%22audio%22%5D%2C%22title%22%3A%22Join%20Nikos%20as%20he%20builds%20a%20Svelte%20based%20social%20network%20-%20mentorcv.com%22%2C%22url%22%3A%22https%3A%2F%2Flearnwithus.simplecast.com%2Fepisodes%2Fnikos-svelte%22%2C%22description%22%3A%22I%20contrast%20Sapper%20and%20Svelte%20and%20invite%20you%20to%20my%20discord%20to%20watch%20the%20construction%20of%20MentorCV%22%2C%22image%22%3A%22https%3A%2F%2Fcdn.simplecast.com%2Fimages%2F0068cc27-b27c-4dc0-a47e-302106beb254%2F54acfbbf-dcff-4c21-8c47-ef6b03d91b10%2Fscreenshot-2019-11-12-at-19-36-48.jpg%22%7D%2C%7B%22date%22%3A%22November%2016%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22angular%22%5D%2C%22title%22%3A%22Angular%20vs%20Svelte%20-%20Card%20Component%22%2C%22url%22%3A%22https%3A%2F%2Fdev.to%2Fmaurogarcia_19%2Fangular-vs-svelte-card-component-14nk%22%2C%22description%22%3A%22In%20this%20article%20I%20show%20a%20comparison%20between%20Angular%20and%20Svelte%20by%20building%20a%20responsive%20card%20component%22%2C%22image%22%3A%22https%3A%2F%2Fres.cloudinary.com%2Fpracticaldev%2Fimage%2Ffetch%2Fs--OWMwNmJD--%2Fc_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_500%2Cq_auto%2Cw_1000%2Fhttps%3A%2F%2Fi.imgur.com%2F2tfHNOi.png%22%7D%2C%7B%22date%22%3A%22November%2015%2C%202019%22%2C%22tags%22%3A%5B%22video%22%5D%2C%22title%22%3A%22Peter%20Allen%20-%20Re-rendering%20perceptions%20with%20Svelte%22%2C%22url%22%3A%22https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DfUfsHKR6X9s%22%2C%22description%22%3A%22Peter%20Allen%20-%20Re-rendering%20perceptions%20with%20Svelte%20Javascript%20frameworks%20offer%20flexible%20and%20powerful%20abstractions%20with%20which%20to%20manage%20the%20competing%20compl...%22%2C%22image%22%3A%22https%3A%2F%2Fi.ytimg.com%2Fvi%2FfUfsHKR6X9s%2Fmaxresdefault.jpg%22%7D%2C%7B%22date%22%3A%22November%2013%2C%202019%22%2C%22tags%22%3A%5B%22video%22%2C%22react%22%5D%2C%22title%22%3A%22React%20Hooks%20vs%20Svelte%22%2C%22url%22%3A%22https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DYtD2mWDQnxM%22%2C%22description%22%3A%22I%20did%20a%20basic%20comparison%20of%20React%20Hooks%20vs%20Svelte.%20I%20took%20a%20simple%20React%20Hooks%20example%20and%20rewrote%20the%20example%20code%20using%20Svelte.%20Read%20the%20blog%20post%20for%20more...%22%2C%22image%22%3A%22https%3A%2F%2Fi.ytimg.com%2Fvi%2FYtD2mWDQnxM%2Fmaxresdefault.jpg%22%7D%2C%7B%22date%22%3A%22October%2026%2C%202019%22%2C%22tags%22%3A%5B%22video%22%2C%22vue%22%2C%22react%22%5D%2C%22title%22%3A%22The%20Return%20of%20'Write%20Less%2C%20Do%20More'%20by%20Rich%20Harris%20%7C%20JSCAMP%202019%22%2C%22url%22%3A%22https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBzX4aTRPzno%22%2C%22description%22%3A%22More%20information%3A%20https%3A%2F%2Fjscamp.tech%22%2C%22image%22%3A%22https%3A%2F%2Fi.ytimg.com%2Fvi%2FBzX4aTRPzno%2Fhqdefault.jpg%22%7D%2C%7B%22date%22%3A%22October%2025%2C%202019%22%2C%22tags%22%3A%5B%22video%22%2C%22sapper%22%2C%22vue%22%2C%22react%22%2C%22angular%22%2C%22nativescript%22%5D%2C%22title%22%3A%22Nordic.js%202019%20%E2%80%A2%20Mark%20Volkmann%20-%20Simplify%20Web%20App%20Development%20with%20Svelte%22%2C%22url%22%3A%22https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPXOE7oZyaBA%22%2C%22image%22%3A%22https%3A%2F%2Fi.ytimg.com%2Fvi%2FPXOE7oZyaBA%2Fmaxresdefault.jpg%22%7D%2C%7B%22date%22%3A%22October%2023%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22vue%22%2C%22react%22%5D%2C%22title%22%3A%22What%20I%20Like%20About%20Writing%20Styles%20with%20Svelte%22%2C%22url%22%3A%22https%3A%2F%2Fcss-tricks.com%2Fwhat-i-like-about-writing-styles-with-svelte%2F%22%2C%22description%22%3A%22There%E2%80%99s%20been%20a%20lot%20of%20well-deserved%20hype%20around%20Svelte%20recently%2C%20with%20the%20project%20accumulating%20over%2024%2C000%20GitHub%20stars.%20Arguably%20the%20simplest%20JavaScript%22%2C%22image%22%3A%22https%3A%2F%2Fcss-tricks.com%2Fwp-content%2Fuploads%2F2019%2F10%2Fsvelte-logo-outline.png%22%7D%2C%7B%22date%22%3A%22October%2019%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22vue%22%2C%22react%22%2C%22angular%22%5D%2C%22title%22%3A%225%20things%20I%20love%20about%20Svelte%22%2C%22url%22%3A%22https%3A%2F%2Fdev.to%2Fmaurogarcia_19%2F5-things-i-love-about-svelte-39h9%22%2C%22description%22%3A%22I%20wrote%20an%20introduction%20about%20Svelte%20based%20on%20what%20I%20learn%20by%20following%20the%20official%20tutorial.%22%2C%22image%22%3A%22https%3A%2F%2Fres.cloudinary.com%2Fpracticaldev%2Fimage%2Ffetch%2Fs--dVJ-p302--%2Fc_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_500%2Cq_auto%2Cw_1000%2Fhttps%3A%2F%2Fi.imgur.com%2FEe674Za.png%22%7D%2C%7B%22date%22%3A%22October%203%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22vue%22%2C%22react%22%2C%22angular%22%5D%2C%22title%22%3A%22CTO%E2%80%99s%20guide%20to%20Svelte%20%E2%80%93%20what%20can%20the%20rising%20frontend%20framework%20do%20for%20you%3F%22%2C%22url%22%3A%22https%3A%2F%2Ftsh.io%2Fblog%2Fsvelte-framework%2F%22%2C%22description%22%3A%22Svelte%20is%20a%20rising%20JavaScript%20frontend%20framework%20with%20unique%20approach%20to%20app%20development.%20Learn%20its%20benefits%20and%20how%20it%20compares%20to%20React%20or%20Angular%22%2C%22image%22%3A%22https%3A%2F%2Ftsh.io%2Fwp-content%2Fuploads%2F2019%2F10%2Fsvelte-javascript-frontend-framework_.jpg%22%7D%2C%7B%22date%22%3A%22September%2029%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22vue%22%2C%22react%22%5D%2C%22title%22%3A%22SvelteJS%3A%20The%20next%20big%20UI%20framework%22%2C%22url%22%3A%22https%3A%2F%2Fdev.to%2Fmstamstrom%2Fsveltejs-the-next-big-ui-framework-4n0e%22%2C%22description%22%3A%22What%20is%20SvelteJS%20and%20how%20do%20I%20get%20started%22%2C%22image%22%3A%22https%3A%2F%2Fdev.to%2Fsocial_previews%2Farticle%2F160813.png%22%7D%2C%7B%22date%22%3A%22September%2013%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22react%22%5D%2C%22title%22%3A%22Static%20Svelte%3A%20JavaScript%20Blogging%20with%2093%25%20less%20JavaScript%22%2C%22url%22%3A%22https%3A%2F%2Fwww.swyx.io%2Fwriting%2Fsvelte-static%2F%22%2C%22description%22%3A%22Static%20Svelte%3A%20JavaScript%20Blogging%20with%2093%25%20less%20JavaScript%3A%20Why%20Svelte%20is%20a%20Perfect%20Fit%20For%20Blogging%22%2C%22image%22%3A%22https%3A%2F%2Fwww.swyx.io%2Fog_image%2Fwriting%2Fsvelte-static.png%22%7D%2C%7B%22date%22%3A%22September%204%2C%202019%22%2C%22tags%22%3A%5B%22audio%22%2C%22react%22%2C%22nativescript%22%5D%2C%22title%22%3A%22Svelte%20and%20Reactivity%20with%20Rich%20Harris%20%7C%20Frontside%22%2C%22url%22%3A%22https%3A%2F%2Ffrontside.io%2Fpodcast%2Fsvelte-and-reactivity-with-rich-harris%2F%22%7D%2C%7B%22date%22%3A%22August%2031%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22sapper%22%2C%22vue%22%2C%22react%22%2C%22angular%22%5D%2C%22title%22%3A%22Svelte%20and%20the%20Search%20for%20Web%20Application%20Performance%22%2C%22url%22%3A%22https%3A%2F%2Fmedium.com%2F%40raymondsiu%2Fsvelte-and-the-search-for-web-application-performance-4f3901cd99fb%22%2C%22description%22%3A%22This%20story%20started%20when%20I%20was%20faced%20with%20the%20challenge%20of%20building%20a%20web%20application%20that%20would%20handle%20large%20loads%20of%20dynamic%20data%20and%20present%20it%20in%20a%20multitude%20of%20data%20visualizations%20that%20needed%20to%E2%80%A6%22%2C%22image%22%3A%22https%3A%2F%2Fmiro.medium.com%2Fmax%2F1200%2F0*1ytsKGc-SsieWOt4%22%7D%2C%7B%22date%22%3A%22August%2028%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22react%22%5D%2C%22title%22%3A%22Notes%20on%20'Metaphysics%20and%20JavaScript'%22%2C%22url%22%3A%22https%3A%2F%2Fwww.swyx.io%2Fwriting%2Fsvelte-metaphysics%2F%22%2C%22description%22%3A%22swyx%20Writing%20%7C%20Notes%20on%20'Metaphysics%20and%20JavaScript'%22%2C%22image%22%3A%22https%3A%2F%2Fwww.swyx.io%2Fog_image%2Fwriting%2Fsvelte-metaphysics.png%22%7D%2C%7B%22date%22%3A%22August%2026%2C%202019%22%2C%22tags%22%3A%5B%22audio%22%2C%22vue%22%2C%22react%22%5D%2C%22title%22%3A%22Hasty%20Treat%20-%20Wes%20%26%20Scott%20Look%20At%20Svelte%203%20%E2%80%94%20Syntax%20Podcast%20173%22%2C%22url%22%3A%22https%3A%2F%2Fsyntax.fm%2Fshow%2F173%2Fhasty-treat-wes-and-scott-look-at-svelte-3%22%2C%22description%22%3A%22Full%20Stack%20Developers%20Wes%20Bos%20and%20Scott%20Tolinski%20dive%20deep%20into%20web%20development%20topics%2C%20explaining%20how%20they%20work%20and%20talking%20about%20their%20own%20experiences.%20They%20cover%20from%20JavaScript%20frameworks%20like%20React%2C%20to%20the%20latest%20advancements%20in%20CSS%20to%20simplifying%20web%20tooling.%22%2C%22image%22%3A%22https%3A%2F%2Fsyntax.fm%2Fstatic%2Fsyntax-banner.png%22%7D%2C%7B%22date%22%3A%22August%2024%2C%202019%22%2C%22tags%22%3A%5B%22video%22%2C%22sapper%22%2C%22vue%22%2C%22react%22%2C%22angular%22%2C%22nativescript%22%5D%2C%22title%22%3A%22Simplified%20Web%20App%20Development%20with%20Svelte%22%2C%22url%22%3A%22https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DaoKpKSbKovU%22%2C%22description%22%3A%22Svelte%20is%20a%20relatively%20new%20tool%20for%20building%20web%20applications.%20Rather%20than%20including%20a%20runtime%20library%2C%20it%20compiles%20to%20bundled%20JavaScript%20that%20is%20very%20small%20...%22%2C%22image%22%3A%22https%3A%2F%2Fi.ytimg.com%2Fvi%2FaoKpKSbKovU%2Fhqdefault.jpg%22%7D%2C%7B%22date%22%3A%22August%204%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22vue%22%2C%22react%22%2C%22angular%22%5D%2C%22title%22%3A%22Intro%20to%20Svelte%20%F0%9F%A6%84%E2%9A%A1%EF%B8%8F%F0%9F%A7%A1%22%2C%22url%22%3A%22https%3A%2F%2Fdev.to%2Fsendilkumarn%2Fintro-to-svelte-460b%22%2C%22image%22%3A%22https%3A%2F%2Fres.cloudinary.com%2Fpracticaldev%2Fimage%2Ffetch%2Fs--HsnQRGlf--%2Fc_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_500%2Cq_auto%2Cw_1000%2Fhttps%3A%2F%2Fres.cloudinary.com%2Fpracticaldev%2Fimage%2Ffetch%2Fs--cL5QLgLH--%2Fc_imagga_scale%252Cf_auto%252Cfl_progressive%252Ch_420%252Cq_auto%252Cw_1000%2Fhttps%3A%2F%2Fthepracticaldev.s3.amazonaws.com%2Fi%2Fg3fmr8hxwzjq5o0kp4u9.png%22%7D%2C%7B%22date%22%3A%22August%204%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22vue%22%2C%22react%22%2C%22angular%22%5D%2C%22title%22%3A%22The%20simplest%20Svelte%20component%20is%20an%20empty%20file%22%2C%22url%22%3A%22https%3A%2F%2Fdev.to%2Fjesseskinner%2Fthe-simplest-svelte-component-is-an-empty-file-2lhk%22%2C%22description%22%3A%22What%20can%20this%20teach%20us%20about%20Svelte's%20groundbreaking%20approach%20to%20writing%20components%3F%22%2C%22image%22%3A%22https%3A%2F%2Fres.cloudinary.com%2Fpracticaldev%2Fimage%2Ffetch%2Fs--nv4j_jVb--%2Fc_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_500%2Cq_auto%2Cw_1000%2Fhttps%3A%2F%2Fimgur.com%2Fdownload%2FNDDAbIz%22%7D%2C%7B%22date%22%3A%22July%2025%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22sapper%22%2C%22vue%22%2C%22react%22%5D%2C%22title%22%3A%22Build%20a%20blog%20with%20Sapper%20and%20Svelte%22%2C%22url%22%3A%22https%3A%2F%2Fmattcrouch.github.io%2Fblog%2F2019%2F07%2Fbuild-a-blog-with-sapper-and-svelte%2F%22%2C%22description%22%3A%22In%20the%20age%20of%20frameworks%2C%20Webpack%20and%20complicated%20build%20tools%2C%20regular%20boring%20JavaScript%20can%20easily%20be%20overlooked.%20Gone%20are%20the%20days%20of%20sites%20that%20only%20shipped%20the%20code%20they%20needed%20right%3F%20We%20need%20runtimes%20now%20to%20compile%20our%20JSX%20else%20who%20knows%20what%20will%20happen.%22%2C%22image%22%3A%22https%3A%2F%2Fmattcrouch.github.io%2Fblog%2Fassets%2F2019-07-25-build-a-blog-with-sapper-and-svelte%2Fbuild-a-blog-with-sapper-and-svelte-cover.jpg%22%7D%2C%7B%22date%22%3A%22July%2024%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22vue%22%2C%22react%22%2C%22angular%22%5D%2C%22title%22%3A%22Introduction%20to%20Svelte%22%2C%22url%22%3A%22https%3A%2F%2Fdaveceddia.com%2Fsvelte-intro%2F%22%2C%22image%22%3A%22https%3A%2F%2Fdaveceddia.com%2Fimages%2Fintro-to-svelte.png%22%7D%2C%7B%22date%22%3A%22July%2024%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22sapper%22%2C%22vue%22%2C%22react%22%2C%22angular%22%2C%22nativescript%22%5D%2C%22title%22%3A%22Web%20Development%20Simplified%20with%20Svelte%22%2C%22url%22%3A%22https%3A%2F%2Fobjectcomputing.com%2Fresources%2Fpublications%2Fsett%2Fjuly-2019-web-dev-simplified-with-svelte%22%2C%22description%22%3A%22This%20article%20provides%20a%20thorough%20introduction%20to%20Svelte%20and%20walks%20you%20through%20the%20fundamentals%20necessary%20to%20start%20building%20web%20applications%20with%20it.%22%2C%22image%22%3A%22https%3A%2F%2Fobjectcomputing.com%2Ffiles%2F4815%2F7566%2F7982%2F1907-sett-featured-1200x675.png%22%7D%2C%7B%22date%22%3A%22July%2024%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22vue%22%2C%22react%22%2C%22angular%22%5D%2C%22title%22%3A%22Svelte%20for%20Angular%20Developers%22%2C%22url%22%3A%22https%3A%2F%2Fblog.bitsrc.io%2Fsvelte-for-angular-developers-34012b93420c%22%2C%22description%22%3A%22Svelte%20is%20a%20relatively%20recent%20framework%20for%20building%20UIs%20developed%20by%20Rich%20Harris%2C%20also%20the%20creator%20of%20Rollup.%20Svelte%20will%20likely%20appear%20as%20a%20radically%20different%20approach%20from%20what%20you%E2%80%99ve%20seen%E2%80%A6%22%2C%22image%22%3A%22https%3A%2F%2Fmiro.medium.com%2Fmax%2F1200%2F0*WsYLcAh19KsBrTMA%22%7D%2C%7B%22date%22%3A%22July%2022%2C%202019%22%2C%22tags%22%3A%5B%22text%22%5D%2C%22title%22%3A%22Svelte%3A%20Why%20You%20Should%20Take%20a%20Look%22%2C%22url%22%3A%22http%3A%2F%2Fmandax.com.br%2Fpost%2Fsvelte-why-you-should-take-a-look%2F%22%2C%22description%22%3A%22I%E2%80%99ve%20been%20working%20with%20design%20for%20the%20web%20since%202006%2C%20and%20I%20saw%20the%20frontend%20born%20and%20grow.%20Back%20there%2C%20the%20hardest%20part%20of%20the%20web%20development%20was%20the%20cross-browser%20part%2C%20because%20we%20had%20to%20handle%20a%20bunch%20of%20different%20browsers%20and%20the%20weirdest%20one%2C%20the%20Internet%20Explorer%206.%E2%86%B5Of%20course%2C%20we%20didn%E2%80%99t%20have%20any%20fast%20javascript%20renderer%20at%20that%20time%20yet%2C%20so%20we%20were%20kind%20of%20limited%20on%20that%20part.%22%2C%22image%22%3A%22https%3A%2F%2Fmandax.com.br%2Fimages%2Fpost2_svelte_header.jpg%22%7D%2C%7B%22date%22%3A%22July%202%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22sapper%22%2C%22react%22%5D%2C%22title%22%3A%22Exploring%20Sapper%20%2B%20Svelte%3A%20A%20quick%20tutorial%22%2C%22url%22%3A%22https%3A%2F%2Fblog.logrocket.com%2Fexploring-sapper-svelte-a-quick-tutorial%2F%22%2C%22description%22%3A%22Discover%20how%20to%20use%20Sapper%2C%20the%20companion%20component%20framework%20to%20Svelte%20that%20helps%20you%20build%20larger%20and%20more%20complex%20apps%20quickly%20and%20efficiently.%22%2C%22image%22%3A%22https%3A%2F%2Fi1.wp.com%2Fblog.logrocket.com%2Fwp-content%2Fuploads%2F2019%2F07%2Fexploring-svelte-sapper.jpg%22%7D%2C%7B%22date%22%3A%22June%2029%2C%202019%22%2C%22tags%22%3A%5B%22text%22%5D%2C%22title%22%3A%22Svelte%20is%20the%20most%20beautiful%20web%20framework%20I've%20ever%20seen%22%2C%22url%22%3A%22https%3A%2F%2Fdev.to%2Fjesseskinner%2Fsvelte-is-the-most-beautiful-web-framework-i-ve-ever-seen-325f%22%2C%22description%22%3A%22I%20tried%20out%20Svelte%20for%20the%20first%20time%20and%20it%20blew%20me%20away%22%2C%22image%22%3A%22https%3A%2F%2Fres.cloudinary.com%2Fpracticaldev%2Fimage%2Ffetch%2Fs--IbZIpM7j--%2Fc_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_500%2Cq_auto%2Cw_1000%2Fhttps%3A%2F%2Fthepracticaldev.s3.amazonaws.com%2Fi%2Fmgwefpk0tjgu18i2lzcc.jpg%22%7D%2C%7B%22date%22%3A%22June%2028%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22vue%22%2C%22react%22%2C%22angular%22%5D%2C%22title%22%3A%22Why%20SvelteJS%20may%20be%20the%20best%20framework%20for%20new%20web%20devs%22%2C%22url%22%3A%22https%3A%2F%2Fdev.to%2Fbholmesdev%2Fwhy-sveltejs-may-be-the-best-framework-for-new-web-devs-205i%22%2C%22description%22%3A%22Every%20new%20programmer%20starts%20with%20vanilla%20JS%20and%20DOM%20manipulation.%20But%20in%20the%20component-driven%20world%20of%20modern%20web%20dev%2C%20is%20that%20the%20best%20way%20to%20start%3F%22%2C%22image%22%3A%22https%3A%2F%2Fres.cloudinary.com%2Fpracticaldev%2Fimage%2Ffetch%2Fs--Y5H4oomk--%2Fc_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_500%2Cq_auto%2Cw_1000%2Fhttps%3A%2F%2Fthepracticaldev.s3.amazonaws.com%2Fi%2Fc3s8y2nj2safv7q58qs9.png%22%7D%2C%7B%22date%22%3A%22June%2027%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22vue%22%2C%22react%22%5D%2C%22title%22%3A%22Getting%20started%20with%20Svelte%22%2C%22url%22%3A%22https%3A%2F%2Fblog.knoldus.com%2Fgetting-started-with-svelte%2F%22%2C%22description%22%3A%22Svelte%20JS%20is%20a%20lightweight%20modern%20Javascript%20library%20intended%20for%20use%20on%20projects.%20Svelte%20JS%20is%20used%20to%20develop%20cybernetically%20enhanced%20web%20apps.%22%2C%22image%22%3A%22https%3A%2F%2Fblog.knoldus.com%2Fwp-content%2Fuploads%2F2019%2F06%2FTitle-Image-2.png%22%7D%2C%7B%22date%22%3A%22June%2026%2C%202019%22%2C%22tags%22%3A%5B%22video%22%5D%2C%22title%22%3A%22Why%20Svelte%20is%20the%20best%20JS%20%5C%22framework%5C%22%22%2C%22url%22%3A%22https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DrMBusx68ujY%22%2C%22description%22%3A%22Why%20Svelte%20is%20better%20than%20Angular%2C%20React%20and%20Vue.%20JUST%20MY%20OPINION%20I%20lay%20out%20why%20I%20choose%20to%20use%20Svelte%20in%20my%20projects%20and%20why%20I%20think%20you%20probably%20should%20too.%22%2C%22image%22%3A%22https%3A%2F%2Fi.ytimg.com%2Fvi%2FrMBusx68ujY%2Fmaxresdefault.jpg%22%7D%2C%7B%22date%22%3A%22June%2025%2C%202019%22%2C%22tags%22%3A%5B%22text%22%5D%2C%22title%22%3A%22The%20importance%20of%20elegance%22%2C%22url%22%3A%22https%3A%2F%2Fwww.varvet.com%2Fblog%2Fthe-importance-of-elegance%2F%22%2C%22description%22%3A%22About%20a%20week%20ago%2C%20Rich%20Harris%20posted%20a%20brutal%20takedown%20of%20Web%20Components%2C%20and%20parts%20of%20it%20really%20stayed%20with%20me.%20Rich%20is%20%E2%80%94%20among%20a%20host%20of%20other%20inventions%20%E2%80%94%20the%20creator%20of%20Svelte%2C%20a%20futuristic%20compiled%20frontend%20framework%2C%20and%20a%20lot%20of%20his%20post%20is...%22%2C%22image%22%3A%22https%3A%2F%2Fwww.varvet.com%2Fimages%2Fog-varvet.jpg%22%7D%2C%7B%22date%22%3A%22June%2024%2C%202019%22%2C%22tags%22%3A%5B%22audio%22%5D%2C%22title%22%3A%22Svelte%203's%20radical%20new%20approach%20to%20web%20frameworks%22%2C%22url%22%3A%22https%3A%2F%2Fdevmode.fm%2Fepisodes%2Fsvelte-3s-radical-new-approach-to-web-frameworks%22%2C%22description%22%3A%22In%20this%20episode%20we%20have%20on%20Rich%20Harris%2C%20the%20creator%20the%20Svelte%20JavaScript%20framework.%20Rich%20leads%20us%20through%20the%20new%20Svelte%203.0%20release%2C%20and%20how%20it%20moves%20away%20from%20a%20traditional%20JavaScript%20framework%20into%20a%20JavaScript%20framework%20compiler.%E2%86%B5%E2%86%B5This%20means%20you%20don't%20end%20up%20shipping%20a%20monolithic%20framework%2C%E2%80%A6%22%2C%22image%22%3A%22https%3A%2F%2Fdevmode.fm%2Fassets%2Fsite%2F_1200x630_crop_center-center_82_none%2Fdevmode_light-itunes.jpg%22%7D%2C%7B%22date%22%3A%22June%2019%2C%202019%22%2C%22tags%22%3A%5B%22text%22%5D%2C%22title%22%3A%22Reactive%20user%20interfaces%20using%20SvelteJS%22%2C%22url%22%3A%22https%3A%2F%2Fdenisjakus.com%2Freactive-user-interfaces-using-sveltejs%2F%22%2C%22description%22%3A%22Take%20a%20glipmse%20to%20a%20new%20Javacsript%20compiler%2Fframework.%20Svelte%20will%20once%20again%20make%20frontend%20development%20a%20joy%20to%20do.%22%7D%2C%7B%22date%22%3A%22June%2012%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22sapper%22%2C%22vue%22%2C%22react%22%2C%22angular%22%2C%22stencil%22%5D%2C%22title%22%3A%22Comparing%20Svelte%20and%20Stencil%20JS%20Frameworks%22%2C%22url%22%3A%22https%3A%2F%2Fpianomanfrazier.com%2Fpost%2Fcomparing-svelte-stencil%2F%22%2C%22description%22%3A%22Ramblings%20of%20Ryan%20Frazier%3A%20Programmer%2C%20Musician%2C%20and%20Educator%22%2C%22image%22%3A%22https%3A%2F%2Fpianomanfrazier.com%2Fimg%2Fnew-web-tech-2019%2Fcompare.svg%22%7D%2C%7B%22date%22%3A%22June%2011%2C%202019%22%2C%22tags%22%3A%5B%22video%22%2C%22react%22%5D%2C%22title%22%3A%22React%20vs%20Svelte%20in%20just%203%20minutes!!%20Should%20you%20choose%20Svelte%20over%20React%3F%22%2C%22url%22%3A%22https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DelJWiVrHIhY%22%2C%22description%22%3A%22A%20quick%20difference%20between%20React%20and%20Svelte.%20Should%20you%20choose%20Svelte%20over%20React%3F%20Should%20you%20switch%20your%20projects%20to%20Svelte%3F%20or%20Should%20you%20even%20learn%20it%3F%20Let...%22%2C%22image%22%3A%22https%3A%2F%2Fi.ytimg.com%2Fvi%2FelJWiVrHIhY%2Fmaxresdefault.jpg%22%7D%2C%7B%22date%22%3A%22June%203%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22sapper%22%2C%22vue%22%2C%22react%22%2C%22angular%22%2C%22nativescript%22%5D%2C%22title%22%3A%22Why%20Svelte%20might%20disrupt%20the%20JS%20framework%20space%22%2C%22url%22%3A%22https%3A%2F%2Fabhinav.xyz%2Fposts%2Fwhy-svelte-disrupt-js-framework-space%2F%22%2C%22description%22%3A%22Svelte%20is%20a%20JS%20framework%20that%20borrows%20ideas%20from%20other%20frameworks%2C%20but%20with%20a%20twist%20of%20its%20own.%22%2C%22image%22%3A%22https%3A%2F%2Fabhinav.xyz%2Fstatic%2Fsvelte-65be0b23927fd030df4bf5dc4860895c-1fc8d.png%22%7D%2C%7B%22date%22%3A%22May%2025%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22vue%22%2C%22react%22%5D%2C%22title%22%3A%22Svelte.js%3A%20Two%20way%20binding%22%2C%22url%22%3A%22https%3A%2F%2Fmedium.com%2F%40Roli_Dori%2Fsvelte-js-two-way-binding-ded98a89af1c%22%2C%22description%22%3A%22Svelte%20is%20a%20component%20framework%20%E2%80%94%20like%20React%20or%20Vue%20%E2%80%94%20but%20with%20an%20important%20difference.%20Traditional%20frameworks%20allow%20you%20to%20write%20declarative%20state-driven%20code%2C%20but%20there%E2%80%99s%20a%20penalty%3A%20the%20browser%E2%80%A6%22%2C%22image%22%3A%22https%3A%2F%2Fmiro.medium.com%2Fmax%2F1200%2F1*OJLglSTFZ1PbwpRG0U2xXA.png%22%7D%2C%7B%22date%22%3A%22May%2023%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22sapper%22%2C%22vue%22%2C%22react%22%2C%22angular%22%2C%22nativescript%22%5D%2C%22title%22%3A%22Svelte%20framework%20-%20how%20it%20can%20help%20in%20JavaScript%20projects%3F%22%2C%22url%22%3A%22https%3A%2F%2Fwww.merixstudio.com%2Fblog%2Fsvelte-framework-javascript-projects%2F%22%2C%22description%22%3A%22What%20makes%20Svelte%20standing%20out%20from%20other%20Javascript%20frameworks%20and%20why%20you%20should%20consider%20using%20it%3F%22%2C%22image%22%3A%22https%3A%2F%2Fcdn.merixstudio.com%2Fmedia%2Fseo%2Fog_images%2F2019%2F05%2F23%2F16%2F48%2FSvelte_Javascript_framework.png%22%7D%2C%7B%22date%22%3A%22May%2021%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22react%22%2C%22angular%22%5D%2C%22title%22%3A%22Truly%20reactive%20programming%20with%20Svelte%203.0%22%2C%22url%22%3A%22https%3A%2F%2Fblog.logrocket.com%2Ftruly-reactive-programming-with-svelte-3-0-321b49b75969%2F%22%2C%22description%22%3A%22That%20title%20is%20a%20bit%20dramatic%2C%20but%20then%20again%2C%20so%20is%20Svelte%20and%20the%20idea%20behind%20it.%20If%20you%20don%E2%80%99t%20know%20what%20Svelte%20is%20yet%2C%20then%20strap%20in%E2%80%8A%E2%80%94%E2%80%8Ayou%E2%80%99re%20about%20to%20witness%20a%20revolution%2C%20and%20it%E2%80%99s%20going%20to%20be%20a%20ride%20(no%20pressure%20on%20the%20Svelte%20team%20%F0%9F%98%85).%20Note%20that%20this%20is%20not%20a%20tutorial%20on%20how%20%E2%80%A6%22%2C%22image%22%3A%22https%3A%2F%2Fi1.wp.com%2Fblog.logrocket.com%2Fwp-content%2Fuploads%2F2019%2F05%2Ftruly-reactive-programming-svelte-3.0.jpg%22%7D%2C%7B%22date%22%3A%22May%2020%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22vue%22%2C%22react%22%5D%2C%22title%22%3A%22Svelte%20takes%20the%20best%20of%20React%20and%20the%20best%20of%20Vue%20to%20make%20something%20awesome%22%2C%22url%22%3A%22https%3A%2F%2Fswizec.com%2Fblog%2Fsvelte-takes-the-best-of-react-and-the-best-of-vue-to-make-something-awesome%2Fswizec%2F9089%22%2C%22description%22%3A%22Yesterday%20I%20tried%20Svelte%20to%20see%20what%20all%20the%20fuss%20is%20about.%20Version%203.0.0%20came%20out%20recently%20and%20it%20smells%20like%20Svelte%20is%20ready%20for%20the%20big%20time.%22%2C%22image%22%3A%22https%3A%2F%2Fsvelte.dev%2Fsvelte-logo-horizontal.svg%22%7D%2C%7B%22date%22%3A%22May%2020%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22vue%22%2C%22react%22%2C%22angular%22%5D%2C%22title%22%3A%22Why%20you%20may%20need%20to%20consider%20svelte.js%20over%20React%2C%20Vue%20or%20Angular%22%2C%22url%22%3A%22https%3A%2F%2Fcloudnweb.dev%2F2019%2F05%2Fwhy-you-may-need-to-consider-svelte-js-over-reactvue-or-angular%2F%22%2C%22description%22%3A%22Svelte.js%20is%20a%20latest%20framework%20in%20the%20market.%20we%20will%20see%20Why%20you%20may%20need%20to%20consider%20svelte.js%20over%20React%2CVue%20or%20Angular%22%2C%22image%22%3A%22https%3A%2F%2Fsecureservercdn.net%2F166.62.107.204%2Fppi.eb2.myftpupload.com%2Fwp-content%2Fuploads%2F2019%2F05%2Fsvelte.png%22%7D%2C%7B%22date%22%3A%22May%2015%2C%202019%22%2C%22tags%22%3A%5B%22video%22%2C%22vue%22%2C%22react%22%2C%22angular%22%5D%2C%22title%22%3A%22Svelte%20vs%20React%20vs%20Angular%20vs%20Vue%22%2C%22url%22%3A%22https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDZyWNS4fVE0%22%2C%22description%22%3A%22Should%20you%20choose%20SvelteJS%20over%20React.js%20or%20Angular%3F%22%2C%22image%22%3A%22https%3A%2F%2Fi.ytimg.com%2Fvi%2FDZyWNS4fVE0%2Fmaxresdefault.jpg%22%7D%2C%7B%22date%22%3A%22May%207%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22react%22%2C%22angular%22%5D%2C%22title%22%3A%22Svelte%20your%20way%22%2C%22url%22%3A%22https%3A%2F%2Fmedium.com%2F%40dudousxd%2Fsvelte-your-way-ad50f9455553%22%2C%22description%22%3A%22I%20know%2C%20I%20know%2C%20another%20JavaScript%20Framework%3F%20Everybody%20is%20kinda%20full%20of%20JavaScript%20innovations%20every%20week%2C%20but%20this%20is%20something%20worth%20commenting.%20We%20have%20tons%20of%20frameworks%20out%20there%2C%20promising%E2%80%A6%22%2C%22image%22%3A%22https%3A%2F%2Fmiro.medium.com%2Fmax%2F1200%2F0*T6pKJjgoPIBy_u-_.png%22%7D%2C%7B%22date%22%3A%22May%206%2C%202019%22%2C%22tags%22%3A%5B%22text%22%2C%22sapper%22%2C%22vue%22%2C%22react%22%2C%22nativescript%22%5D%2C%22title%22%3A%22Svelte%203%20Front-End%20Framework%20Moves%20Reactivity%20into%20the%20JavaScript%20Language%2C%20Q%26A%20with%20Rich%20Harris%22%2C%22url%22%3A%22https%3A%2F%2Fwww.infoq.com%2Fnews%2F2019%2F05%2Fsvelte-3-interview-rich-harris%2F%22%2C%22description%22%3A%22The%20recently%20released%20front-end%20framework%20Svelte%203%20introduces%20a%20new%20syntax%20to%20express%20reactivity%20in%20JavaScript.%20%20InfoQ%20interviewed%20Rich%20Harris%2C%20Svelte%20creator%2C%20and%20discussed%20what%20Svelte%203%20means%20and%20it%22%2C%22image%22%3A%22https%3A%2F%2Fcdn.infoq.com%2Fstatics_s2_20191219062348%2Fstyles%2Fi%2Flogo-big.jpg%22%7D%2C%7B%22date%22%3A%22April%2030%2C%202019%22%2C%22tags%22%3A%5B%22video%22%5D%2C%22title%22%3A%22Svelte%203%20Is%20All%20Kinds%20Of%20Awesome...%22%2C%22url%22%3A%22https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DefAMY1JvrcQ%22%2C%22description%22%3A%22In%20this%20video%20I%20wanna%20talk%20a%20bit%20about%20%23Svelte%203%20and%20also%20show%20you%20a%20few%20code%20examples%20from%20this%20awesome%20%23JavaScript%20framework%20So%20Svelte%20made%20some%20waves%20past...%22%2C%22image%22%3A%22https%3A%2F%2Fi.ytimg.com%2Fvi%2FefAMY1JvrcQ%2Fmaxresdefault.jpg%22%7D%2C%7B%22date%22%3A%22April%2025%2C%202019%22%2C%22tags%22%3A%5B%22video%22%2C%22vue%22%2C%22react%22%2C%22angular%22%5D%2C%22title%22%3A%22Svelte%203%20Reaction%20%26%20QuickStart%20Tutorial%22%2C%22url%22%3A%22https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D043h4ugAj4c%22%2C%22description%22%3A%22First%2C%20we%20learn%20some%20basic%20concepts%20in%20Svelte%203%20and%20how%20to%20build%20reactive%20UI%20components%20with%20JavaScript.%20Then%20we%20build%20a%20fullstack%20realtime%20todo%20list%20with%20Rx...%22%2C%22image%22%3A%22https%3A%2F%2Fi.ytimg.com%2Fvi%2F043h4ugAj4c%2Fmaxresdefault.jpg%22%7D%2C%7B%22date%22%3A%22April%2022%2C%202019%22%2C%22tags%22%3A%5B%22video%22%2C%22sapper%22%2C%22vue%22%2C%22react%22%2C%22nativescript%22%5D%2C%22title%22%3A%22Rich%20Harris%20-%20Rethinking%20reactivity%22%2C%22url%22%3A%22https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DAdNJ3fydeao%22%2C%22description%22%3A%22Modern%20JavaScript%20frameworks%20are%20all%20about%20reactivity.%20Change%20your%20application's%20state%2C%20and%20the%20view%20updates%20automatically.%20But%20there's%20a%20catch%20%E2%80%94%20tracking%20st...%22%2C%22image%22%3A%22https%3A%2F%2Fi.ytimg.com%2Fvi%2FAdNJ3fydeao%2Fmaxresdefault.jpg%22%7D%5D
`))

const app = new App({
	target: document.body,
	props: {
		resources
	}
})

export default app
