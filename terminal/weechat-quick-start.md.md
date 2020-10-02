# weechat quick start
https://weechat.org/files/doc/stable/weechat_quickstart.en.html

> A recommended (but not mandatory) X terminal emulator for running WeeChat is rxvt-unicode.
It has good UTF-8 support and works well with WeeChat’s default key bindings.

# WeeChat quick start guide
[](https://weechat.org/files/doc/stable/weechat_quickstart.en.html#start)1\. Start WeeChat
------------------------------------------------------------------------------------------

A recommended (but not mandatory) X terminal emulator for running WeeChat is rxvt-unicode. It has good UTF-8 support and works well with WeeChat’s default key bindings.

Run from your shell:

[](https://weechat.org/files/doc/stable/weechat_quickstart.en.html#help)2\. Online help
---------------------------------------------------------------------------------------

WeeChat has help for all commands, just issue:

To get help on a specific command, issue:

Help is available for options as well:

/help config.section.option

(where `config` is configuration name (`weechat` for core, or a plugin name), `section` the section of this configuration and `option` the option name).

[](https://weechat.org/files/doc/stable/weechat_quickstart.en.html#options)3\. Set options
------------------------------------------------------------------------------------------

To set options, issue:

/set config.section.option value

WeeChat immediately uses the new value (you **never** need to restart WeeChat after changes to configuration).

All settings are saved when WeeChat ends (or with the `/save` command to force a write of the options).

It is **not recommended** to edit configuration files by hand because WeeChat may write them at any time (for example on `/quit`) and after any change you must run the command `/reload` (with the risk of losing other changes that were not yet saved with `/save`).  
You can use the command `/set`, which checks the value and applies immediately the changes.

The plugin _fset_ allows you to easily browse options and change them.

For example to display WeeChat options:

IRC options:

The `/fset` command has completion on part of option names, so for example if you type `/fset hot` and press Tab this is completed as `/fset hotlist`. If you press Enter, options about the hotlist are displayed.

For more information about the `/fset` command and keys, see `/help fset`.

[](https://weechat.org/files/doc/stable/weechat_quickstart.en.html#core_vs_plugins)4\. Core vs plugins
------------------------------------------------------------------------------------------------------

WeeChat "core" is only used to display data on screen and interact with the user, that means weechat core without plugins is useless (faithful users: IRC was part of core for versions ≤ 0.2.6).

All network protocols like IRC are provided in separate plugins.

Use the `/plugin` command to list loaded plugins, you should see "irc" and other plugins in the list.

[](https://weechat.org/files/doc/stable/weechat_quickstart.en.html#add_irc_server)5\. Add an IRC server
-------------------------------------------------------------------------------------------------------

You can add an IRC server with the `/server` command, for example:

/server add freenode chat.freenode.net

In this command, `freenode` is the internal server name used by WeeChat: you’ll be able to connect with `/connect freenode` and the server options are _irc.server.freenode.xxx_.

As usual, help is available if you’re lost:

[](https://weechat.org/files/doc/stable/weechat_quickstart.en.html#irc_server_options)6\. Set custom IRC server options
-----------------------------------------------------------------------------------------------------------------------

WeeChat uses default values for all servers ("fall backs"), if you don’t specify a specific value for a server option. These default options are "irc.server\_default.\*".

For each server option, WeeChat uses its value if it is defined (not "null"). Otherwise WeeChat uses default value ("irc.server\_default.xxx").

For example there are default nicks (based on your un\*x login), and you can override them for the freenode server with following command:

/set irc.server.freenode.nicks "mynick,mynick2,mynick3,mynick4,mynick5"

To set the user and real names:

/set irc.server.freenode.username "My user name"
/set irc.server.freenode.realname "My real name"

To enable auto-connect to server at startup:

/set irc.server.freenode.autoconnect on

To connect with SSL:

/set irc.server.freenode.addresses "chat.freenode.net/7000"
/set irc.server.freenode.ssl on

If SASL is available on the server, you can use it for authentication (you will be identified before you join channels):

/set irc.server.freenode.sasl\_username "mynick"
/set irc.server.freenode.sasl\_password "xxxxxxx"

To run a command after connection to server, for example to authenticate with nickserv (only if you don’t use SASL for authentication):

/set irc.server.freenode.command "/msg nickserv identify xxxxxxx"

Many commands in option _command_ can be separated by `;` (semi-colon).

If you want to protect your password in configuration files, you can use secured data.

First setup a passphrase:

/secure passphrase this is my secret passphrase

Then add a secured data with your freenode password:

/secure set freenode\_password xxxxxxx

Then you can use `${sec.data.freenode_password}` instead of your password in the IRC options mentioned above, for example:

/set irc.server.freenode.sasl\_password "${sec.data.freenode\_password}"

To auto-join some channels when connecting to server:

/set irc.server.freenode.autojoin "#channel1,#channel2"

You can complete name and value of options with the Tab key and Shift+Tab for a partial completion (useful for long words like the name of option).

To remove a value of a server option, and use the default value instead, for example to use default nicks (irc.server\_default.nicks):

/unset irc.server.freenode.nicks

Other options: you can setup other options with the following command ("xxx" is option name):

/set irc.server.freenode.xxx value

[](https://weechat.org/files/doc/stable/weechat_quickstart.en.html#connect_to_irc_server)7\. Connect to IRC server
------------------------------------------------------------------------------------------------------------------

With this command, WeeChat connects to the freenode server and auto-joins the channels configured in the "autojoin" server option.

This command can be used to create and connect to a new server without using the `/server` command (see `/help connect`).

By default, server buffers are merged with WeeChat _core_ buffer. To switch between the _core_ buffer and server buffers, you can use Ctrl+x.

It is possible to disable auto merge of server buffers to have independent server buffers:

/set irc.look.server\_buffer independent

[](https://weechat.org/files/doc/stable/weechat_quickstart.en.html#join_part_irc_channels)8\. Join/part IRC channels
--------------------------------------------------------------------------------------------------------------------

Join a channel:

Part a channel (keeping the buffer open):

Close a server, channel or private buffer (`/close` is an alias for `/buffer close`):

Closing the server buffer will close all channel/private buffers.

Disconnect from server, on the server buffer:

[](https://weechat.org/files/doc/stable/weechat_quickstart.en.html#irc_private_messages)9\. IRC private messages
----------------------------------------------------------------------------------------------------------------

Open a buffer and send a message to another user (nick _foo_):

/query foo this is a message

Close the private buffer:

[](https://weechat.org/files/doc/stable/weechat_quickstart.en.html#buffer_window)10\. Buffer/window management
--------------------------------------------------------------------------------------------------------------

A buffer is a component linked to a plugin with a number, a category, and a name. A buffer contains the data displayed on the screen.

A window is a view on a buffer. By default there’s only one window displaying one buffer. If you split the screen, you will see many windows with many buffers at same time.

Commands to manage buffers and windows:

For example, to vertically split your screen into a small window (1/3 width), and a large window (2/3), use command:

To remove the split:

[](https://weechat.org/files/doc/stable/weechat_quickstart.en.html#key_bindings)11\. Key bindings
-------------------------------------------------------------------------------------------------

WeeChat uses many keys by default. All these keys are in the documentation, but you should know at least some vital keys:

*   Alt+← / Alt+→ or F5 / F6: switch to previous/next buffer
    
*   F1 / F2: scroll bar with list of buffers ("buflist")
    
*   F7 / F8: switch to previous/next window (when screen is split)
    
*   F9 / F10: scroll title bar
    
*   F11 / F12: scroll nicklist
    
*   Tab: complete text in input bar, like in your shell
    
*   PgUp / PgDn: scroll text in current buffer
    
*   Alt+a: jump to buffer with activity (in hotlist)
    

According to your keyboard and/or your needs, you can rebind any key to a command with the `/key` command. A useful key is Alt+k to find key codes.

For example, to bind Alt+! to the command `/buffer close`:

/key bind (press alt-k) (press alt-!) /buffer close

You’ll have a command line like:

/key bind meta-! /buffer close

To remove key:

[](https://weechat.org/files/doc/stable/weechat_quickstart.en.html#plugins_scripts)12\. Plugins/scripts
-------------------------------------------------------------------------------------------------------

On some distros like Debian, plugins are available via a separate package (like weechat-plugins). Plugins are automatically loaded when found (please look at the WeeChat documentation to load/unload plugins or scripts).

Many external scripts (from contributors) are available for WeeChat, you can download and install scripts from the repository with the `/script` command, for example:

See `/help script` for more info.

[](https://weechat.org/files/doc/stable/weechat_quickstart.en.html#more_doc)13\. More documentation
---------------------------------------------------------------------------------------------------

You can now use WeeChat and read FAQ/documentation for any other questions: [https://weechat.org/doc](https://weechat.org/doc)

Enjoy using WeeChat!
