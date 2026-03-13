import { PermissionFlagsBits, MessageFlags } from "discord.js";
import { Command } from "#classes/Command";
import { createV2LikeEmbed } from "#utils/store";

class SayCommand extends Command {
  constructor() {
    super({
      name: "say",
      description: "Make bot send a message",
      userPermissions: [PermissionFlagsBits.ManageMessages],
      enabledSlash: true,
      slashData: {
        name: "say",
        description: "Make bot send a message",
        options: [
          {
            name: "message",
            description: "Text to send",
            type: 3,
            required: true,
          },
        ],
        defaultMemberPermissions: PermissionFlagsBits.ManageMessages,
      },
    });
  }

  async execute({ ctx, args }) {
    // SLASH COMMAND
    if (ctx.isSlash) {
      const content = ctx.options.getString("message", true);

      await ctx.channel.send({ content });

      return ctx.reply({
        embeds: [
          createV2LikeEmbed({
            title: "Sent",
            description: "Message sent.",
            color: 0x57f287,
          }),
        ],
        flags: MessageFlags.Ephemeral,
      });
    }

    // PREFIX COMMAND
    const content = args.join(" ");
    if (!content) return;

    await ctx.channel.send({ content });
  }
}

export default new SayCommand();
