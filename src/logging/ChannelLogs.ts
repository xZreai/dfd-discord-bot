import { createLogEmbed } from './index';

export const startChannelLogs = (client) => {
    client.on('channelCreate', async (channel) => {
        if (channel.type === 'DM') return;

        const logChannel = channel.guild.channels.cache.find((c) => c.name === 'logs');

        const embed = createLogEmbed(
            '#00FF00',
            'Channel Created',
            `Name: "${channel.name}"`,
            `Channel ID: ${channel.id}`,
        );

        await logChannel.send({ embeds: [embed] });
    });
    client.on('channelDelete', async (channel) => {
        if (channel.type === 'DM') return;

        const logChannel = channel.guild.channels.cache.find((c) => c.name === 'logs');

        const embed = createLogEmbed(
            '#FF0000',
            'Channel Deleted',
            `Name: "${channel.name}"`,
            `Channel ID: ${channel.id}`,
        );

        await logChannel.send({ embeds: [embed] });
    });
    client.on('channelUpdate', async (oldChannel, newChannel) => {
        if (oldChannel.type === 'DM') return;

        const logChannel = oldChannel.guild.channels.cache.find((c) => c.name === 'logs');

        if (oldChannel.name !== newChannel.name) {
            const embed = createLogEmbed(
                '#FFAA00',
                'Channel Name Changed',
                `**Before:** "${oldChannel.name}"\n**After:** "${newChannel.name}"`,
                `Channel ID: ${oldChannel.id}`,
            );

            await logChannel.send({ embeds: [embed] });
            return;
        }

        if (oldChannel.type !== 'GUILD_TEXT') return;

        if (oldChannel.topic !== newChannel.topic) {
            const embed = createLogEmbed(
                '#FFAA00',
                'Channel Topic Changed',
                `**Before:** "${oldChannel.topic}"\n**After:** "${newChannel.topic}"`,
                `Channel ID: ${oldChannel.id}`,
            );

            await logChannel.send({ embeds: [embed] });
        }
    });
};
