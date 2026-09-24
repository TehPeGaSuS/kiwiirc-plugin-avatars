import definition from '@dicebear/styles/%stylename%.json';

/* global kiwi:true */

kiwi.plugin('avatars-%stylename%', (kiwi) => {
    kiwi.pluginAvatars.addStyle('%stylename%', definition);
});
