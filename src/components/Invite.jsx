import React, { Component } from 'react';
import '../css/Invite.css';

class Invite extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {data: {}};
    this.setData = this.setData.bind(this);
    let set = this.setData;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
      if(this.readyState == 4 && this.status == 200)
      {
        console.log(this);
        set(JSON.parse(this.response));
      }
    }
    xhttp.open('GET', `https://discordapp.com/api/invites/${this.props.code}?with_counts=true`, true);
    xhttp.send();
  }
  setData(data)
  {
    this.setState({data: data});
  }
  render()
  {
    let serverIcon = '';
    let serverInfo = '';
    let serverName = '';
    let button = '';
    let online = '';
    let offline = '';
    let invite = '';
    if (this.state.data.guild !== undefined)
    {
      invite = `https://discord.gg/${this.props.code}`;
      online = <span className="DiscordInvite-OnlineCircle">&nbsp;</span>;
      offline = <span className="DiscordInvite-MembersCircle">&nbsp;</span>;
      serverIcon =  <a href={invite}><img className="DiscordInvite-Icon" src={`https\://cdn.discordapp.com/icons/${this.state.data.guild.id}/${this.state.data.guild.icon}.png`} /></a>;
      serverName = <span className="DiscordInvite-Name"><a href={invite}>{this.state.data.guild.name}</a></span>;
      serverInfo = <div className="DiscordInvite-Info">
      {serverName}
        <div className="DiscordInvite-Online-Members">
        <span className="DiscordInvite-Online">{online}{`${this.state.data.approximate_presence_count.toLocaleString()} Online`}</span>
        <span className="DiscordInvite-Members">{offline}{`${this.state.data.approximate_member_count.toLocaleString()} Members`}</span>
        </div>
      </div>
      button = <a className="DiscordInvite-Button" href={invite}>Join</a>;
    }
    return(
      <div className="DiscordInvite">
        <span className="DiscordInvite-Message">You have been invited to a server.</span>
        <div className="DiscordInvite-Content">
          {serverIcon}
          {serverInfo}
          {button}
        </div>
        
      </div>
    )
  }
}

export default Invite;