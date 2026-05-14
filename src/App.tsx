/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import BranchesPage from "./pages/BranchesPage";
import BranchDetailPage from "./pages/BranchDetailPage";
import TopicPage from "./pages/TopicPage";
import CareerPage from "./pages/CareerPage";
import LegendsPage from "./pages/LegendsPage";
import LegendDetailPage from "./pages/LegendDetailPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import TimelinePage from "./pages/TimelinePage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/branches" element={<BranchesPage />} />
          <Route path="/branches/:branch" element={<BranchDetailPage />} />
          <Route path="/topics/:topic" element={<TopicPage />} />
          <Route path="/careers/:career" element={<CareerPage />} />
          <Route path="/legends" element={<LegendsPage />} />
          <Route path="/legends/:legend" element={<LegendDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
                    <Route path="/timeline" element={<TimelinePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}


