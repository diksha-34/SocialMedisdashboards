import React from 'react';

const Analytics = ({ user }) => {
    return (
        <div>
            <h3>Analytics</h3>
            <p>Accounts Reached: {user.accountsReached}</p>
            <p>Accounts Engaged: {user.accountsEngaged}</p>
            <p>Content Shared: {user.contentShared}</p>
            <p>Ads Run: {user.adsRun}</p>
            <p>Active Promotions: {user.activePromotions}</p>
            <p>Total Stories: {user.totalStories}</p>
            <p>Total Follows: {user.totalFollows}</p>
            <p>Total Saves: {user.totalSaves}</p>
            <p>Total Comments: {user.totalComments}</p>
            <p>Total Shares: {user.totalShares}</p>
        </div>
    );
};

export default Analytics;
