import { useEffect, useState } from 'react';
import axios from 'axios';

const GithubStatsPage = () => {
    // Will be adding information related to commits, repositories, and licenses to main personal site
    const [commits, updateCommits] = useState(null);
    const [repositories, updateRepositories] = useState(null);
    const [licenses, updateLicenses] = useState(null);

    useEffect(() => {
        axios.post("")   
        //      
    }, []);

    return (
        <div classname='github-stats-page'>

        </div>
    )

}

export default GithubStatsPage;